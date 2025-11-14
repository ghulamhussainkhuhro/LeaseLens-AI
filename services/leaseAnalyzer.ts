import { LeaseData } from '../types';

export const analyzeLeaseText = async (text: string): Promise<LeaseData> => {
  if (!text || text.trim().length < 50) {
    throw new Error(
      'Please provide a more substantial lease text for analysis. Minimum 50 characters required.'
    );
  }

  try {
    const response = await fetch("http://localhost:8000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Backend error: ${detail || response.statusText}`);
    }

    const result: LeaseData = await response.json();
    return result;

  } catch (error: any) {
    throw new Error(error.message || 'Failed to analyze lease text.');
  }
};
