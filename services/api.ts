import { LeadPayload } from '../types';

const API_URL = 'https://lacer2k.app.n8n.cloud/webhook/2ae1dd83-ef0b-4156-b07f-0d0891b12faf';

export const submitLead = async (leadData: LeadPayload) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(leadData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'An unknown error occurred.');
  }

  return response.json();
};
