export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "data.intlaws.com" && (url.pathname === "/" || url.pathname === "")) {
      url.pathname = "/legal-data.html";
      return env.STATIC.fetch(url);
    }
    return env.STATIC.fetch(request);
  }
};
