export type LeadRecord = {
  id: string;
  submissionId: string;
  requestId: string;
  idempotencyKey: string;
  audienceType: "employer" | "candidate";
  leadType: string;
  sourcePage: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  policyVersion: string;
  consentTimestamp: string;
  payload: Record<string, unknown>;
  status: string;
  createdAt: string;
};

export type LeadApiResponse =
  | { success: true; submissionId: string; requestId: string }
  | {
      success: false;
      error: {
        code:
          | "VALIDATION_ERROR"
          | "RATE_LIMITED"
          | "DUPLICATE"
          | "INTERNAL_ERROR";
        message: string;
      };
      requestId: string;
    };
