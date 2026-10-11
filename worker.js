export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isDataRoot = url.hostname === "data.intlaws.com" && (url.pathname === "/" || url.pathname === "");
    if (isDataRoot) url.pathname = "/legal-data.html";
    const resp = await env.STATIC.fetch(new Request(url, request));
    const r = new Response(resp.body, resp);
    r.headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    return r;
  }
};
