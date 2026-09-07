// server.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import fs from 'fs';

const app = express();
app.use(cors({ origin: ['http://localhost:5173','http://localhost:3000'] }));
app.use(express.json());

const RAW_PATH = './public/transito_raw.txt';
let fragments = [];
let embeddings = [];
const MODEL_EMB = 'text-embedding-3-small';
const MODEL_CHAT = 'gpt-3.5-turbo';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function chunkText(text, chunkSize = 1000, overlap = 200) {
  const chunks = [];
  let i = 0;
  while (i < text.length) {
    const end = Math.min(i + chunkSize, text.length);
    chunks.push(text.slice(i, end));
    i += (chunkSize - overlap);
  }
  return chunks;
}

function cosine(a, b) {
  let dot = 0, ma = 0, mb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    ma += a[i] * a[i];
    mb += b[i] * b[i];
  }
  return dot / (Math.sqrt(ma) * Math.sqrt(mb));
}

async function initEmbeddings() {
  if (!fs.existsSync(RAW_PATH)) {
    console.warn(`⚠ No existe ${RAW_PATH}. Crea el archivo antes de iniciar.`);
    return;
  }
  const raw = fs.readFileSync(RAW_PATH, 'utf8');
  fragments = chunkText(raw, 1000, 200).map((t, i) => ({
    pageContent: t,
    metadata: { source: `transito_raw.txt#${i}` }
  }));
  console.log(`📝 ${fragments.length} fragmentos cargados.`);

  // Embeddings por lotes
  const batchSize = 100;
  embeddings = [];
  for (let i = 0; i < fragments.length; i += batchSize) {
    const batch = fragments.slice(i, i + batchSize).map(f => f.pageContent);
    const resp = await openai.embeddings.create({
      model: MODEL_EMB,
      input: batch
    });
    embeddings.push(...resp.data.map(d => d.embedding));
    console.log(`🔢 Embeddings: ${Math.min(i + batch.length, fragments.length)}/${fragments.length}`);
  }
  console.log('✅ Embeddings listos.');
}

app.get('/healthz', (_req, res) => res.send('ok'));

app.post('/api/chat', async (req, res) => {
  try {
    const { question } = req.body;
    if (!question || !question.trim()) {
      return res.status(400).json({ error: 'Campo "question" requerido.' });
    }
    if (!fragments.length || !embeddings.length) {
      return res.status(503).json({ error: 'Índice aún no listo. Intenta de nuevo en unos segundos.' });
    }

    const qemb = await openai.embeddings.create({ model: MODEL_EMB, input: question });
    const q = qemb.data[0].embedding;

    // rank por similitud
    const scored = fragments.map((doc, idx) => ({
      score: cosine(q, embeddings[idx]),
      doc
    })).sort((a, b) => b.score - a.score);

    const top = scored.slice(0, 5).map(s => s.doc.pageContent);
    const sources = scored.slice(0, 5).map(s => s.doc.metadata.source);

    const sys = `Eres un asistente experto en leyes de tránsito.
Responde SOLO con base en los fragmentos provistos. Si no hay información, di que no aparece.`;

    const user = `FRAGMENTOS:
${top.join('\n----\n')}

PREGUNTA:
${question}`;

    const chat = await openai.chat.completions.create({
      model: MODEL_CHAT,
      messages: [
        { role: 'system', content: sys },
        { role: 'user', content: user }
      ],
      temperature: 0.2
    });

    const answer = chat.choices?.[0]?.message?.content?.trim() || 'Sin respuesta.';
    res.json({ answer, sources });
  } catch (e) {
    console.error('Error /api/chat:', e);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, async () => {
  console.log(`🚀 Backend en http://localhost:${PORT}`);
  await initEmbeddings();
});
