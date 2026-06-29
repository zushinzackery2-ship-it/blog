import { c as createComponent, h as homeUrl } from './path_DqmOt-PZ.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_dw9cAcTW.mjs';
import { $ as $$BaseLayout, a as $$MainGrid } from './MainGrid_DRu8dJbX.mjs';
import 'reading-time';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404", "description": "页面未找到", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainGrid", $$MainGrid, { "variant": "content", "data-astro-cid-zetdm5md": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="not-found page-panel" data-astro-cid-zetdm5md> <div class="error-code text-gradient" data-astro-cid-zetdm5md>404</div> <p class="error-msg" data-astro-cid-zetdm5md>这个页面似乎飘走了...</p> <a${addAttribute(homeUrl(), "href")} class="back-home" data-astro-cid-zetdm5md>返回首页</a> </div> ` })} ` })}`;
}, "D:/AI/TEST/blog/shrei-blog/src/pages/404.astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/404.astro";
const $$url = "/blog/404/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
