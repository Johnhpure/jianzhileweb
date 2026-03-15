import { getPool } from "./db";
import type { LeadRecord } from "@/types/leads";

type CreateLeadInput = {
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
};

export async function createLead(
  input: CreateLeadInput
): Promise<{ created: boolean; submissionId: string }> {
  const pool = getPool();
  const result = await pool.query(
    `INSERT INTO leads (
      submission_id, request_id, idempotency_key,
      audience_type, lead_type, source_page,
      utm_source, utm_medium, utm_campaign,
      policy_version, consent_timestamp, payload
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    ON CONFLICT (idempotency_key, audience_type)
    DO UPDATE SET request_id = leads.request_id
    RETURNING submission_id, (xmax = 0) AS is_new`,
    [
      input.submissionId,
      input.requestId,
      input.idempotencyKey,
      input.audienceType,
      input.leadType,
      input.sourcePage,
      input.utmSource ?? null,
      input.utmMedium ?? null,
      input.utmCampaign ?? null,
      input.policyVersion,
      input.consentTimestamp,
      JSON.stringify(input.payload),
    ]
  );

  const row = result.rows[0];
  return {
    created: row.is_new,
    submissionId: row.submission_id,
  };
}
