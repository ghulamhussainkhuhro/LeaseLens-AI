import os
import json
import time
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import AzureOpenAI

MAX_RETRIES = 4
RETRY_DELAY = 1.2

load_dotenv()

AZURE_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT")
AZURE_KEY = os.getenv("AZURE_OPENAI_KEY")
AZURE_DEPLOYMENT = os.getenv("AZURE_OPENAI_DEPLOYMENT")
AZURE_API_VERSION = os.getenv("AZURE_OPENAI_API_VERSION")

if not AZURE_ENDPOINT or not AZURE_KEY or not AZURE_DEPLOYMENT:
    raise Exception("Azure OpenAI environment variables missing in .env")

client = AzureOpenAI(
    api_key=AZURE_KEY,
    api_version=AZURE_API_VERSION,
    azure_endpoint=AZURE_ENDPOINT
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LeaseRequest(BaseModel):
    text: str

class LeaseResponse(BaseModel):
    rentAmount: float | None
    rentCurrency: str | None
    securityDeposit: float | None
    leaseStartDate: str | None
    leaseEndDate: str | None
    noticePeriodDays: int | None
    lateFee: str | None
    terminationRules: list[str] | None


@app.post("/analyze", response_model=LeaseResponse)
async def analyze_lease(request: LeaseRequest):

    prompt = f"""
    Extract the following fields from this lease agreement text:

    - rentAmount (number)
    - rentCurrency (string)
    - securityDeposit (number)
    - leaseStartDate (string)
    - leaseEndDate (string)
    - noticePeriodDays (int)
    - lateFee (string)
    - terminationRules (array of strings)

    Respond ONLY with valid JSON. No explanation.

    Lease Text:
    {request.text}
    """

    last_error = None

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            response = client.chat.completions.create(
                model=AZURE_DEPLOYMENT,
                messages=[
                    {"role": "system", "content": "You are a lease analyzer."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0
            )

            # FIXED: correct attribute access
            output = response.choices[0].message.content.strip()

            return json.loads(output)

        except Exception as e:
            last_error = str(e)

            if "503" in str(e) or "unavailable" in str(e).lower():
                print(f"[Retry {attempt}/{MAX_RETRIES}] Azure overloaded. Retrying…")
                time.sleep(RETRY_DELAY)
                continue

            if "JSONDecodeError" in str(e) or "Expecting" in str(e):
                raise HTTPException(status_code=500, detail="Model returned invalid JSON")

            break

    raise HTTPException(
        status_code=503,
        detail=f"Azure OpenAI unavailable after retries: {last_error}"
    )
