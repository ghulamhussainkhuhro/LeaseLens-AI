
import React from 'react';

const CodeBlock: React.FC<{ children: React.ReactNode, lang?: string }> = ({ children, lang = 'bash' }) => (
  <pre className="bg-slate-800 text-white p-4 rounded-lg my-4 overflow-x-auto text-sm">
    <code className={`language-${lang}`}>{children}</code>
  </pre>
);

const ApiPage: React.FC = () => {
  const requestBody = `{
  "text": "<user_pasted_text>"
}`;

  const responseBody = `{
  "rentAmount": 1500,
  "rentCurrency": "USD",
  "securityDeposit": 1500,
  "leaseStartDate": "2023-08-01",
  "leaseEndDate": "2024-07-31",
  "noticePeriodDays": 60,
  "lateFee": "A late fee of $50...",
  "terminationRules": [
    "Tenant may terminate...",
    "A penalty applies..."
  ]
}`;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200/80">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">API Coming Soon</h1>
      <p className="text-lg text-slate-600 mb-8">
        We're working on a robust API for developers to integrate LeaseLens into their own applications. Stay tuned for updates!
      </p>

      <div className="border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Endpoint (Future)</h2>
        <p className="text-slate-600">The primary endpoint for analyzing lease documents will be:</p>
        <CodeBlock lang="http">
          POST https://api.leaselens.ai/analyze
        </CodeBlock>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Request Body</h2>
        <p className="text-slate-600">The request body should contain the lease text as a JSON string.</p>
        <CodeBlock lang="json">{requestBody}</CodeBlock>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Example Response</h2>
        <p className="text-slate-600">A successful request will return a structured JSON object with the extracted lease terms.</p>
        <CodeBlock lang="json">{responseBody}</CodeBlock>
      </div>
    </div>
  );
};

export default ApiPage;
