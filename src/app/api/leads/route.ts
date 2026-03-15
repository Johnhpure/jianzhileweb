import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { leadSubmissionSchema, employerLeadSchema, candidateLeadSchema } from "@/lib/validation";
import { createLead } from "@/lib/leads";
import { checkRateLimit, checkHoneypot } from "@/lib/anti-spam";

export async function POST(request: NextRequest) {
  const requestId = uuidv4();

  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "RATE_LIMITED", message: "请稍后再试" },
          requestId,
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    const parsed = leadSubmissionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: parsed.error.issues[0]?.message ?? "表单数据无效",
          },
          requestId,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (!checkHoneypot(data.honeypot)) {
      return NextResponse.json(
        { success: true, submissionId: uuidv4(), requestId },
        { status: 200 }
      );
    }

    const payloadSchema =
      data.audienceType === "employer"
        ? employerLeadSchema
        : candidateLeadSchema;

    const payloadResult = payloadSchema.safeParse(data.payload);
    if (!payloadResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message:
              payloadResult.error.issues[0]?.message ?? "表单数据无效",
          },
          requestId,
        },
        { status: 400 }
      );
    }

    const submissionId = uuidv4();

    const result = await createLead({
      submissionId,
      requestId,
      idempotencyKey: data.idempotencyKey,
      audienceType: data.audienceType,
      leadType: data.leadType,
      sourcePage: data.sourcePage,
      utmSource: data.utmSource,
      utmMedium: data.utmMedium,
      utmCampaign: data.utmCampaign,
      policyVersion: data.policyVersion,
      consentTimestamp: data.consentTimestamp,
      payload: payloadResult.data as Record<string, unknown>,
    });

    return NextResponse.json({
      success: true,
      submissionId: result.submissionId,
      requestId,
    });
  } catch (error) {
    console.error("Lead submission error:", { requestId, error });
    return NextResponse.json(
      {
        success: false,
        error: { code: "INTERNAL_ERROR", message: "服务暂时不可用，请稍后再试" },
        requestId,
      },
      { status: 500 }
    );
  }
}
