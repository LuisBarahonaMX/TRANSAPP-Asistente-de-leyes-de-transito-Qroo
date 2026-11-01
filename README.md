# TRANSAPP

<p align="center">
  <img src="assets/imagenportada.png"
       alt="TRANSAPP intelligent traffic-law assistant"
       width="100%">
</p>

<p align="center">
  <strong>Intelligent assistant for understanding traffic regulations in Quintana Roo, Mexico.</strong>
</p>

---

## About TRANSAPP

**TRANSAPP** is an artificial intelligence web assistant designed to make traffic regulations and road-safety information easier to understand and consult.

The project allows users to ask questions in natural language about traffic rules in Quintana Roo, Mexico, and receive simplified guidance based on the available regulatory information.

Instead of manually searching through long legal documents, TRANSAPP provides a conversational interface that helps users identify relevant traffic rules, responsibilities and regulations.

---

## Main Objective

The main objective of TRANSAPP is to improve access to traffic-law information through artificial intelligence.

The assistant can support queries related to:

- Traffic regulations
- Driver responsibilities
- Road-safety rules
- Infractions and penalties
- Vehicle requirements
- Driving under the influence of alcohol or drugs
- Circulation rules
- Mobility regulations
- General legal information related to road use

---

## How It Works

```text
User Question
      ↓
Web Interface
      ↓
Backend / API
      ↓
Prompt Processing
      ↓
Traffic Regulation Context
      ↓
AI Model
      ↓
Simplified Response
```

The system receives a user question, analyzes the available regulatory context and generates an easier-to-understand response.

---

## Architecture

```text
Frontend
React + Vite
      ↓
HTTP / API Request
      ↓
Backend
Node.js + Express
      ↓
Traffic-law context
      ↓
AI model
      ↓
Structured response
```

TRANSAPP separates the frontend interface from the backend and AI-processing logic, allowing each component to evolve independently.

---

## Technologies

### Frontend

- React
- Vite
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express
- REST API

### Artificial Intelligence

- Large Language Models
- Prompt Engineering
- Context-based question answering
- Retrieval-Augmented Generation concepts

### Development

- Git
- GitHub
- npm
- ESLint

---

## Main Features

- Natural-language interaction
- Traffic-law consultation
- Simplified regulatory explanations
- Road-safety information
- Web-based access
- Structured responses
- Centralized traffic-regulation context
- AI-assisted information retrieval

---

## Example Questions

```text
What happens if I drive under the influence of alcohol?
```

```text
What documents should I carry while driving?
```

```text
What are the consequences of committing a traffic violation?
```

```text
What responsibilities does a driver have according to traffic regulations?
```

TRANSAPP processes the question and returns guidance based on the regulatory information available to the system.

---

## Project Purpose

Traffic regulations are often difficult to consult because they are written in formal legal language and distributed across extensive documents.

TRANSAPP explores how artificial intelligence can make this information easier to access.

```text
User question
      ↓
Relevant regulation
      ↓
AI interpretation
      ↓
Simplified explanation
```

The goal is not to replace official authorities or legal professionals, but to provide an accessible technological tool for consulting traffic information.

---

## Repository Structure

```text
TRANSAPP-Asistente-de-leyes-de-transito-Qroo/
│
├── src/
│
├── public/
│
├── asistente-ayudatransito/
│
├── assets/
│   └── imagenportada.png
│
├── server.js
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

The exact structure may evolve as the project continues to be organized and improved.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/LuisBarahonaMX/TRANSAPP-Asistente-de-leyes-de-transito-Qroo.git
```

Enter the project:

```bash
cd TRANSAPP-Asistente-de-leyes-de-transito-Qroo
```

Install dependencies:

```bash
npm install
```

Run the development environment:

```bash
npm run dev
```

If the backend is executed separately:

```bash
node server.js
```

---

## Environment Variables

Private API credentials should never be stored directly in the repository.

Use environment variables or a local `.env` file.

Example:

```text
OPENAI_API_KEY=your_api_key
```

Keep `.env` files excluded from Git.

---

## Responsible Use

TRANSAPP is an informational and educational support tool.

It does not replace:

- Official traffic authorities
- Legal professionals
- Official regulations
- Administrative decisions
- Formal legal advice

Traffic regulations can change over time, so important legal matters should always be verified against current official sources.

---

## Limitations

The current version has several limitations:

- Responses depend on the quality of the available regulatory context.
- Legal information may require periodic updates.
- Natural-language interpretation can introduce ambiguity.
- The assistant should not be treated as an authoritative legal source.
- Improved source traceability is still desirable.

---

## Future Development

Planned improvements include:

- Expanded traffic-law corpus
- Better legal-document retrieval
- Improved RAG architecture
- Source citations in responses
- Better traceability to specific regulations
- Query history
- Mobile-oriented interface
- Improved interface accessibility
- Additional road-safety information

---

## Potential Applications

TRANSAPP can serve as a foundation for intelligent assistants related to:

- Traffic regulations
- Road safety
- Driver education
- Mobility
- Public legal information
- Government services
- Regulatory document consultation

---

## Project Status

```text
[✓] Web interface
[✓] React + Vite frontend
[✓] Backend integration
[✓] Traffic-law assistant
[✓] Natural-language interaction
[✓] Regulatory context integration

[→] Expanded traffic-law corpus
[→] Improved legal retrieval
[→] Source citations
[→] Better RAG architecture
[→] Mobile-oriented interface
```

---

## Author

**Pedro Luis Pérez Barahona**

Data and Organizational Intelligence Engineering  
Universidad del Caribe  
Quintana Roo, Mexico

GitHub:  
https://github.com/LuisBarahonaMX

---

## Repository

https://github.com/LuisBarahonaMX/TRANSAPP-Asistente-de-leyes-de-transito-Qroo

---

## TRANSAPP

**Artificial intelligence applied to make traffic regulations easier to find, understand and consult.**