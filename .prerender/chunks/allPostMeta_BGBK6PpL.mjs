import { g as getAllPosts, p as postSlug } from './path_DqmOt-PZ.mjs';
import 'reading-time';

const GET = async () => {
  const posts = await getAllPosts();
  const meta = posts.map((p) => ({
    slug: postSlug(p),
    title: p.data.title,
    published: p.data.published.toISOString(),
    category: p.data.category,
    tags: p.data.tags
  }));
  return new Response(JSON.stringify(meta), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
