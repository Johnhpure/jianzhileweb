CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id UUID UNIQUE NOT NULL,
  request_id UUID NOT NULL,
  idempotency_key UUID NOT NULL,
  audience_type VARCHAR(20) NOT NULL CHECK (audience_type IN ('employer', 'candidate')),
  lead_type VARCHAR(30) NOT NULL,
  source_page VARCHAR(100),
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  policy_version VARCHAR(20) NOT NULL,
  consent_timestamp TIMESTAMPTZ NOT NULL,
  payload JSONB NOT NULL,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(idempotency_key, audience_type)
);

CREATE INDEX idx_leads_audience_type ON leads (audience_type);
CREATE INDEX idx_leads_created_at ON leads (created_at DESC);
CREATE INDEX idx_leads_status ON leads (status);
