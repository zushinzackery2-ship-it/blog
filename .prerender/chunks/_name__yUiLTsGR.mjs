import { c as createComponent, g as getAllPosts, d as getPostsByCategory } from './path_DqmOt-PZ.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_dw9cAcTW.mjs';
import { $ as $$BaseLayout, a as $$MainGrid } from './MainGrid_DRu8dJbX.mjs';
import { $ as $$PostList } from './PostList_CyBhpKzQ.mjs';
import 'reading-time';

async function getStaticPaths() {
  const allPosts = await getAllPosts();
  const categories = [...new Set(allPosts.map((p) => p.data.category))];
  return categories.map((category) => ({
    params: { name: category },
    props: { category }
  }));
}
const $$name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$name;
  const { category } = Astro2.props;
  const allPosts = await getAllPosts();
  const posts = getPostsByCategory(allPosts, category);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": category, "description": `${category} 分类下的文章` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MainGrid", $$MainGrid, { "variant": "content" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="page-panel"> ${renderComponent($$result3, "PostList", $$PostList, { "posts": posts, "title": category, "subtitle": `${posts.length} 篇文章`, "headerVariant": "page" })} </div> ` })} ` })}`;
}, "D:/AI/TEST/blog/shrei-blog/src/pages/categories/[name].astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/categories/[name].astro";
const $$url = "/blog/categories/[name]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$name,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
