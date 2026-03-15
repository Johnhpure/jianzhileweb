import { z } from "zod";

const phoneRegex = /^1[3-9]\d{9}$/;

export const employerLeadSchema = z.object({
  name: z.string().min(2).max(20),
  company: z.string().min(2).max(50),
  position: z.string().min(2).max(30),
  phone: z.string().regex(phoneRegex, "请输入有效的手机号"),
  monthlyPositions: z.enum(["1-5", "6-20", "21-50", "50+"]),
  primaryCity: z.string().min(2).max(30),
  currentTools: z.array(z.string()).optional(),
});

export const candidateLeadSchema = z.object({
  name: z.string().min(2).max(20),
  phone: z.string().regex(phoneRegex, "请输入有效的手机号"),
  targetPosition: z.string().min(2).max(30),
  targetCity: z.string().min(2).max(20),
});

export const leadSubmissionSchema = z.object({
  audienceType: z.enum(["employer", "candidate"]),
  leadType: z.string().min(1),
  idempotencyKey: z.string().uuid(),
  sourcePage: z.string().min(1),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  policyVersion: z.string().min(1),
  consentTimestamp: z.string().datetime(),
  payload: z.record(z.string(), z.unknown()),
  honeypot: z.string().max(0).optional(),
});

export type EmployerLeadPayload = z.infer<typeof employerLeadSchema>;
export type CandidateLeadPayload = z.infer<typeof candidateLeadSchema>;
export type LeadSubmission = z.infer<typeof leadSubmissionSchema>;
