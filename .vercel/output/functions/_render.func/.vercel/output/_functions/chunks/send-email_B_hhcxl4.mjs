import { Resend } from 'resend';

const resend = new Resend({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "http://localhost:4321", "ASSETS_PREFIX": undefined}.RESEND_API_KEY);
const POST = async ({ request }) => {
  const body = await request.json();
  const { to, from, html, subject, text } = body;
  if (!to || !from || !html || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: "Did not provide the right data"
    });
  }
  try {
    const send = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text
    });
    return new Response(
      JSON.stringify({
        message: send.data
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: error.message
      }),
      {
        status: 500,
        statusText: "Internal Server Error"
      }
    );
  }
};

export { POST };
