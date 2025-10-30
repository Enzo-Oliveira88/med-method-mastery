import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact form data to annafontes29@gmail.com", { name, email });

    const emailResponse = await resend.emails.send({
      from: "MED Method <onboarding@resend.dev>",
      to: ["annafontes29@gmail.com"],
      subject: `Nova mensagem de contato - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #8B4513; border-bottom: 2px solid #8B4513; padding-bottom: 10px;">
            Nova Mensagem de Contato
          </h1>
          
          <div style="margin: 30px 0;">
            <h2 style="color: #333; font-size: 18px; margin-bottom: 10px;">Informações do Contato:</h2>
            
            <p style="margin: 10px 0;">
              <strong>Nome:</strong> ${name}
            </p>
            
            <p style="margin: 10px 0;">
              <strong>E-mail:</strong> ${email}
            </p>
          </div>
          
          <div style="margin: 30px 0;">
            <h2 style="color: #333; font-size: 18px; margin-bottom: 10px;">Mensagem:</h2>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #8B4513;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>Esta mensagem foi enviada através do formulário de contato do site MED Method Mastery.</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
