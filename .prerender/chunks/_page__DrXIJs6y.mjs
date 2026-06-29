import { c as createComponent, g as getAllPosts, s as siteConfig, j as paginate } from './path_DqmOt-PZ.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_dw9cAcTW.mjs';
import { $ as $$BaseLayout, a as $$MainGrid } from './MainGrid_DRu8dJbX.mjs';
import { $ as $$PostList } from './PostList_CyBhpKzQ.mjs';
import { $ as $$Pagination } from './Pagination_BnejaiSk.mjs';
import 'reading-time';

async function getStaticPaths() {
  const allPosts = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / siteConfig.postsPerPage);
  return [...Array(totalPages - 1).keys()].map((i) => ({
    params: { page: String(i + 2) }
  }));
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.params;
  const pageNum = Number(page);
  const allPosts = await getAllPosts();
  const result = paginate(allPosts, pageNum, siteConfig.postsPerPage);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `文章 · 第 ${pageNum} 页`, "description": "所有文章列表" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MainGrid", $$MainGrid, { "variant": "content" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="page-panel"> ${renderComponent($$result3, "PostList", $$PostList, { "posts": result.items, "title": "文章", "subtitle": `第 ${result.page}/${result.totalPages} 页 · 共 ${result.total} 篇`, "headerVariant": "page" })} ${renderComponent($$result3, "Pagination", $$Pagination, { "pagination": result, "base": "/posts/" })} </div> ` })} ` })}`;
}, "D:/AI/TEST/blog/shrei-blog/src/pages/posts/page/[page].astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/posts/page/[page].astro";
const $$url = "/blog/posts/page/[page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
