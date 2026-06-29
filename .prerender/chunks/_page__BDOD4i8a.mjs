import { c as createComponent, g as getAllPosts, i as getRegularPosts, s as siteConfig } from './path_DqmOt-PZ.mjs';
import { r as renderComponent, a as renderTemplate } from './prerender_dw9cAcTW.mjs';
import { $ as $$HomePage } from './HomePage_CUKfuqmn.mjs';
import 'reading-time';

async function getStaticPaths() {
  const allPosts = await getAllPosts();
  const regularPosts = getRegularPosts(allPosts);
  const totalPages = Math.max(1, Math.ceil(regularPosts.length / siteConfig.postsPerPage));
  return [...Array(totalPages - 1).keys()].map((i) => ({
    params: { page: String(i + 2) }
  }));
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.params;
  const pageNum = Number(page);
  return renderTemplate`${renderComponent($$result, "HomePage", $$HomePage, { "pageNum": pageNum })}`;
}, "D:/AI/TEST/blog/shrei-blog/src/pages/page/[page].astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/page/[page].astro";
const $$url = "/blog/page/[page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
