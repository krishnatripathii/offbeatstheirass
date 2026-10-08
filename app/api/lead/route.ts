import { NextResponse } from "next/server";
import { siteConfig } from "@/site.config";

interface LeadPayload {
  name: string;
  businessName: string;
  whatsapp: string;
  needs: string[];
  notes?: string;
  honeypot?: string;
}

// Swappable notification delivery interface
interface NotificationProvider {
  sendLead(lead: LeadPayload): Promise<boolean>;
}

// Console logger for local development and fallback
class ConsoleDeliveryProvider implements NotificationProvider {
  async sendLead(lead: LeadPayload): Promise<boolean> {
    console.log("------------------------------------------");
    console.log("[OFFBEATS LEAD RECEIVED]");
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`Name: ${lead.name}`);
    console.log(`Business Name: ${lead.businessName}`);
    console.log(`WhatsApp: ${lead.whatsapp}`);
    console.log(`Needs: ${lead.needs.join(", ")}`);
    console.log(`Notes: ${lead.notes || "None"}`);
    console.log("------------------------------------------");
    return true;
  }
}

// Resend email delivery provider
class ResendDeliveryProvider implements NotificationProvider {
  private apiKey: string;
  private toEmail: string;

  constructor(apiKey: string, toEmail: string) {
    this.apiKey = apiKey;
    this.toEmail = toEmail;
  }

  async sendLead(lead: LeadPayload): Promise<boolean> {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          from: "Offbeats Website <onboarding@resend.dev>",
          to: [this.toEmail],
          subject: `New Lead: ${lead.name} (${lead.businessName})`,
          html: `
            <h2>New Call Booking Request</h2>
            <p><strong>Name:</strong> ${lead.name}</p>
            <p><strong>Business:</strong> ${lead.businessName}</p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/${lead.whatsapp.replace(/\D/g, "")}">${lead.whatsapp}</a></p>
            <p><strong>Needs:</strong> ${lead.needs.join(", ")}</p>
            <p><strong>Notes:</strong> ${lead.notes ? lead.notes : "None provided"}</p>
          `,
        }),
      });

      return response.ok;
    } catch (err) {
      console.error("Failed sending email via Resend:", err);
      return false;
    }
  }
}

// Provider factory allowing swappable backends
function getDeliveryProvider(): NotificationProvider {
  const resendApiKey = process.env.RESEND_API_KEY;
  const targetEmail = process.env.LEAD_NOTIFICATION_EMAIL || siteConfig.email;

  if (resendApiKey) {
    return new ResendDeliveryProvider(resendApiKey, targetEmail);
  }

  return new ConsoleDeliveryProvider();
}

export async function POST(req: Request) {
  try {
    const body: LeadPayload = await req.json();

    // Honeypot spam protection: silently discard bots
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json({ success: true, message: "Processed" });
    }

    // Validation
    if (!body.name || !body.name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!body.businessName || !body.businessName.trim()) {
      return NextResponse.json(
        { error: "Business name is required." },
        { status: 400 }
      );
    }

    if (!body.whatsapp || !body.whatsapp.trim()) {
      return NextResponse.json(
        { error: "WhatsApp number is required." },
        { status: 400 }
      );
    }

    if (!body.needs || !Array.isArray(body.needs) || body.needs.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one service need." },
        { status: 400 }
      );
    }

    const provider = getDeliveryProvider();
    const sent = await provider.sendLead(body);

    if (!sent) {
      // Still log locally so the lead is never lost
      new ConsoleDeliveryProvider().sendLead(body);
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully.",
    });
  } catch (err) {
    console.error("Error processing lead:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
