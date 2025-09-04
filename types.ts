export interface LeadPayload {
  name: string;
  surname: string;
  email: string;
  phone_number?: string;
}

export interface ApiError {
  error: string;
  message: string;
}
