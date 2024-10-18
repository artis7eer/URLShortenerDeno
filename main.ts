import 'jsr:@std/dotenv/load';

import { generateShortURL, getLongURL } from "./database.ts";
import generatePage from "./page.ts";

Deno.serve(async (req) => {
  // Generate Short URL From Form
  if (req.method === 'POST') {
    const body = await req.formData();
    const url = body.get('url');
    if (url === null) {
      return new Response("URL cannot be blank", {
        status: 400
      });
    }
    const randomId = await generateShortURL(url as string);
    const htmlBody = generatePage(randomId);
    return new Response(htmlBody, {
      status: 200,
      headers: {
        'content-type': 'text/html'
      }
    });
  }

  const url = new URL(req.url);
  // Check If {id} is present in the URL
  const id = url.searchParams.get('id');
  if (id) {
    const longURL = await getLongURL(id);
    // return Original Long URL
    return Response.redirect(longURL as string)
  }
  // Route for Style
  if (url.pathname == '/style.css') {
    const file = await Deno.open('./public/style.css', { read: true });
    return new Response(file.readable)
  }
  // Default Route for Home Page
  const file = await Deno.open('./public/index.html', { read: true });
  return new Response(file.readable)
});