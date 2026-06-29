import { c as createComponent, g as getAllPosts, p as postSlug, b as postUrl } from './path_DqmOt-PZ.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_dw9cAcTW.mjs';
import { $ as $$BaseLayout, r as renderScript, a as $$MainGrid, b as $$Icon } from './MainGrid_DRu8dJbX.mjs';
import 'reading-time';

const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPosts();
  const yearMap = /* @__PURE__ */ new Map();
  for (const p of allPosts) {
    const year = p.data.published.getFullYear();
    if (!yearMap.has(year)) yearMap.set(year, []);
    yearMap.get(year).push({
      slug: postSlug(p),
      title: p.data.title,
      date: p.data.published,
      category: p.data.category
    });
  }
  const groups = [...yearMap.entries()].map(([year, posts]) => ({ year, posts })).sort((a, b) => b.year - a.year);
  const latestYear = groups[0]?.year;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "归档", "description": "文章归档", "data-astro-cid-qma2cssl": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MainGrid", $$MainGrid, { "variant": "content", "data-astro-cid-qma2cssl": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="archive-page page-panel" data-astro-cid-qma2cssl> <div class="archive-header" data-astro-cid-qma2cssl> <h1 class="page-title" data-astro-cid-qma2cssl> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:archive-outline-rounded", "data-astro-cid-qma2cssl": true })}
归档
</h1> <span class="archive-count" data-astro-cid-qma2cssl>共 ${allPosts.length} 篇</span> </div> <div class="timeline" data-astro-cid-qma2cssl> ${groups.map((g) => renderTemplate`<div class="year-group"${addAttribute(g.year, "data-year")}${addAttribute(g.year !== latestYear ? "" : void 0, "data-collapsed")} data-astro-cid-qma2cssl>  <button class="year-row"${addAttribute(g.year, "data-toggle-year")} data-astro-cid-qma2cssl> <div class="year-label" data-astro-cid-qma2cssl> <span class="year-num" data-astro-cid-qma2cssl>${g.year}</span> <span class="year-count" data-astro-cid-qma2cssl>${g.posts.length} 篇</span> </div> <div class="year-node" data-astro-cid-qma2cssl> <div class="node-circle" data-astro-cid-qma2cssl></div> </div> <div class="year-arrow" data-astro-cid-qma2cssl> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:keyboard-arrow-down-rounded", "class": "arrow-icon", "data-astro-cid-qma2cssl": true })} </div> </button>  <div class="posts-container"${addAttribute(g.year, "data-posts")} data-astro-cid-qma2cssl> ${g.posts.map((p) => {
    const mm = String(p.date.getMonth() + 1).padStart(2, "0");
    const dd = String(p.date.getDate()).padStart(2, "0");
    return renderTemplate`<a${addAttribute(postUrl(p.slug), "href")} class="post-row" data-astro-cid-qma2cssl> <div class="post-date" data-astro-cid-qma2cssl>${mm}-${dd}</div> <div class="post-node" data-astro-cid-qma2cssl> <div class="node-dot" data-astro-cid-qma2cssl></div> </div> <div class="post-info" data-astro-cid-qma2cssl> <span class="post-title" data-astro-cid-qma2cssl>${p.title}</span> <span class="post-category" data-astro-cid-qma2cssl>${p.category}</span> </div> </a>`;
  })} </div> </div>`)} </div> </div> ` })} ` })} ${renderScript($$result, "D:/AI/TEST/blog/shrei-blog/src/pages/archive.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/AI/TEST/blog/shrei-blog/src/pages/archive.astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/archive.astro";
const $$url = "/blog/archive/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Archive,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
