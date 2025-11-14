# **LeaseLens AI**

LeaseLens AI is an intelligent lease-analysis tool that extracts structured information from rental agreements using advanced AI models. It reads natural language text, identifies important clauses, and returns clean JSON ready for business workflows, analytics, or automation.

This project is developed as the **Final Project for the Buildables Artificial Intelligence Fellowship**, under the supervision and leadership of **Ma’am Momina Ather**.

---

## **Project Overview**

Lease agreements are often lengthy, dense, and filled with legal terminology that makes it difficult for tenants and small businesses to understand key contract terms. LeaseLens AI solves this problem by:

* Automatically extracting essential information
* Structuring it into machine-readable JSON
* Providing clarity around rent, deposits, dates, notices, fees, and termination clauses
* Allowing easy integration with dashboards, databases, or apps

The result is a fast, accessible, and reliable tool for both **tenants** and **property managers**.

**Project Lead:** [Ma’am **Momina Ather**](https://github.com/momina02) — our Buildables Fellowship Lead

---

## **Key Features**

### AI-Powered Lease Term Extraction

Identifies and extracts:

* Rent amount & currency
* Security deposit
* Lease start and end dates
* Notice periods
* Late fee rules
* Termination clauses

### Clean JSON Output

Structured JSON output ready for:

* Automations
* Data analysis
* Integrations
* Reporting

### FastAPI Backend

A lightweight but powerful Python API that processes user requests and communicates with Azure OpenAI.

### User-Friendly React Frontend

Allows users to paste lease text and instantly receive structured results.

---

## **Tech Stack**

**Frontend:**

* React
* TypeScript
* JavaScript

**Backend:**

* Python
* FastAPI
* Uvicorn
* pydantic

**AI Models & APIs:**

* Azure OpenAI (GPT-4.1-nano deployment used)
* Prompt engineering methodologies

**Developer Tools:**

* Git & GitHub
* Postman for API testing
* Virtual environments
* Environment variable management

---

## **Fellowship Journey**

This project represents the culmination of multiple weeks of learning during the **Buildables Artificial Intelligence Fellowship**. Under Ma’am **Momina Ather’s** guidance, we covered:

### API Development

* Designing REST APIs using FastAPI and Flask
* Routing, validation, and error handling
* JSON schemas, request/response models
* Deployment considerations

### Prompt Engineering

* System prompts vs. user prompts
* Controlling model output to produce valid JSON
* Improving extraction accuracy
* Handling ambiguous or incomplete input text

### AI Concepts & Model Workflows

* Text generation and summarization
* Speech-to-text (STT)
* Text-to-speech (TTS)
* Text-to-text (TTT) transformations
* Embedding-based workflows
* Evaluation of Azure, OpenAI, Gemini, and Grok models

### Hands-On Model Integrations

* Azure OpenAI (final backend)
* OpenAI API
* Gemini API (Google)
* Grok API

### Web Development

* React + TypeScript integration
* API consumption in the frontend
* CORS management
* Handling loading states, errors, retries

### Weekly Assignments & Milestones

All weekly assignments can be viewed here:
[Buildables Fellowship Weekly Assignments](https://github.com/ghulamhussainkhuhro/Buildables-Artificial-Intelligence-Fellowship)

---

## **Installation & Setup**

### Backend

1. Create `.env`:

```
AZURE_OPENAI_ENDPOINT=your_endpoint
AZURE_OPENAI_KEY=your_key
AZURE_OPENAI_DEPLOYMENT=gpt-4.1-nano
AZURE_OPENAI_API_VERSION=2024-05-01-preview
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Run FastAPI:

```bash
uvicorn main:app --reload
```

### Frontend

1. Install:

```bash
npm install
```

2. Run:

```bash
npm run dev
```

---

## **How It Works**

1. User pastes a lease agreement into the web UI.
2. Frontend sends text to FastAPI backend.
3. Backend constructs a prompt and sends it to Azure OpenAI.
4. Model extracts required fields and returns JSON.
5. Frontend displays structured output to the user.

---

## **Project Motivation**

Lease agreements are often confusing and inaccessible. LeaseLens AI bridges the gap between legal language and human understanding. It empowers both tenants and businesses by simplifying complex documents and turning them into usable data.

---

## **Credits**

**Project Lead:** [Ma’am **Momina Ather**](https://github.com/momina02) — our Buildables Fellowship Lead

**Developed By:** Ghulam Hussain Khuhro (Fellow)
