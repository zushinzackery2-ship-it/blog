import { c as createComponent, g as getAllPosts, e as groupByCategory, f as categoryUrl } from './path_DqmOt-PZ.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_dw9cAcTW.mjs';
import { $ as $$BaseLayout, a as $$MainGrid, b as $$Icon } from './MainGrid_DRu8dJbX.mjs';
import { $ as $$PageHeader } from './PageHeader_B0wuCg2x.mjs';
import 'reading-time';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPosts();
  const groups = groupByCategory(allPosts);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "分类", "description": "文章分类", "data-astro-cid-dzaffv5d": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MainGrid", $$MainGrid, { "variant": "content", "data-astro-cid-dzaffv5d": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="page-panel" data-astro-cid-dzaffv5d> ${renderComponent($$result3, "PageHeader", $$PageHeader, { "title": "分类", "subtitle": `共 ${groups.length} 个分类`, "data-astro-cid-dzaffv5d": true })} <div class="cat-grid" data-astro-cid-dzaffv5d> ${groups.map((g) => renderTemplate`<a${addAttribute(categoryUrl(g.category), "href")} class="cat-card glass sheen" data-astro-cid-dzaffv5d> <div class="card-icon" data-astro-cid-dzaffv5d> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:folder-outline-rounded", "data-astro-cid-dzaffv5d": true })} </div> <div class="card-body" data-astro-cid-dzaffv5d> <div class="card-name" data-astro-cid-dzaffv5d>${g.category}</div> <div class="card-count" data-astro-cid-dzaffv5d>${g.count} 篇文章</div> </div> <div class="card-arrow" data-astro-cid-dzaffv5d> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:chevron-right-rounded", "data-astro-cid-dzaffv5d": true })} </div> </a>`)} </div> </div> ` })} ` })}`;
}, "D:/AI/TEST/blog/shrei-blog/src/pages/categories/index.astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/categories/index.astro";
const $$url = "/blog/categories/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
