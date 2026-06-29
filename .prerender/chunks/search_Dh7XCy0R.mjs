import { c as createComponent, a as assetUrl } from './path_DqmOt-PZ.mjs';
import { a as renderTemplate, b as addAttribute, r as renderComponent, m as maybeRenderHead } from './prerender_dw9cAcTW.mjs';
import { r as renderScript, $ as $$BaseLayout, a as $$MainGrid } from './MainGrid_DRu8dJbX.mjs';
import { $ as $$PageHeader } from './PageHeader_B0wuCg2x.mjs';
import 'reading-time';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <link rel="stylesheet"', "> <script", "><\/script> ", ""])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "搜索", "description": "搜索本站文章", "data-astro-cid-ipsxrsrh": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainGrid", $$MainGrid, { "variant": "content", "data-astro-cid-ipsxrsrh": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="page-panel" data-astro-cid-ipsxrsrh> ${renderComponent($$result3, "PageHeader", $$PageHeader, { "title": "搜索", "data-astro-cid-ipsxrsrh": true })} <div class="search-wrap glass" data-astro-cid-ipsxrsrh> <div id="search" data-astro-cid-ipsxrsrh></div> </div> </div> ` })} ` }), addAttribute(assetUrl("/pagefind/pagefind-ui.css"), "href"), addAttribute(assetUrl("/pagefind/pagefind-ui.js"), "src"), renderScript($$result, "D:/AI/TEST/blog/shrei-blog/src/pages/search.astro?astro&type=script&index=0&lang.ts"));
}, "D:/AI/TEST/blog/shrei-blog/src/pages/search.astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/search.astro";
const $$url = "/blog/search/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Search,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
