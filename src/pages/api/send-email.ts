import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// cretae a get method to test the api
// export const GET: APIRoute = async () => {
//   return new Response(
//     JSON.stringify({
//       message: "Hello World",
//     }),
//     {
//       status: 200,
//       statusText: "OK",
//     }
//   );
// };

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { to, from, html, subject, text } = body;

  if (!to || !from || !html || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: "Did not provide the right data",
    });
  }

  try {
    const send = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
    });

    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: "OK",
      }
    );

  } catch (error: any) { 
    return new Response(
      JSON.stringify({
        message: error.message,
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
};
