import { c as createComponent, g as getAllPosts, j as paginate, s as siteConfig } from './path_DqmOt-PZ.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_dw9cAcTW.mjs';
import { $ as $$BaseLayout, a as $$MainGrid } from './MainGrid_DRu8dJbX.mjs';
import { $ as $$PostList } from './PostList_CyBhpKzQ.mjs';
import { $ as $$Pagination } from './Pagination_BnejaiSk.mjs';
import 'reading-time';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPosts();
  const result = paginate(allPosts, 1, siteConfig.postsPerPage);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "文章", "description": "所有文章列表" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MainGrid", $$MainGrid, { "variant": "content" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="page-panel"> ${renderComponent($$result3, "PostList", $$PostList, { "posts": result.items, "title": "文章", "subtitle": `共 ${result.total} 篇`, "headerVariant": "page" })} ${renderComponent($$result3, "Pagination", $$Pagination, { "pagination": result, "base": "/posts/" })} </div> ` })} ` })}`;
}, "D:/AI/TEST/blog/shrei-blog/src/pages/posts/index.astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/posts/index.astro";
const $$url = "/blog/posts/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
