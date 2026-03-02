export async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    const body = await context.request.json();
    const { name, email, company, phone, cage, interest, bestTime } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Name and email are required" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const resendApiKey = context.env.RESEND_API_KEY;
    const toEmail = context.env.CONTACT_TO_EMAIL || "Info@GovCon.Info";

    if (!resendApiKey) {
      // No email key configured — log and return success so the form still works
      console.warn("RESEND_API_KEY not set; contact submission not emailed.");
      return new Response(JSON.stringify({ ok: true }), { headers: corsHeaders });
    }

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      phone ? `Phone: ${phone}` : null,
      cage ? `CAGE Code: ${cage}` : null,
      interest ? `Interest: ${interest}` : null,
      bestTime ? `Best Time to Contact: ${bestTime}` : null,
    ].filter(Boolean).join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GovCon Contact Form <noreply@govcon.info>",
        to: [toEmail],
        reply_to: email,
        subject: `New Inquiry from ${name}${interest ? ` — ${interest}` : ""}`,
        text: lines,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || `Resend error ${res.status}`);
    }

    return new Response(JSON.stringify({ ok: true, id: data.id }), {
      headers: corsHeaders,
    });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return new Response(JSON.stringify({ error: err?.message ?? "Internal server error" }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
