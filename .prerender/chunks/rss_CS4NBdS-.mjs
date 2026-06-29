import { c as createComponent, a as assetUrl, s as siteConfig } from './path_DqmOt-PZ.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_dw9cAcTW.mjs';
import { $ as $$BaseLayout, a as $$MainGrid, b as $$Icon } from './MainGrid_DRu8dJbX.mjs';
import { $ as $$PageHeader } from './PageHeader_B0wuCg2x.mjs';
import 'reading-time';

const $$Rss = createComponent(($$result, $$props, $$slots) => {
  const rssUrl = assetUrl("/rss.xml");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "RSS", "description": `订阅 ${siteConfig.title} 的文章更新`, "data-astro-cid-iu4tusuk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainGrid", $$MainGrid, { "variant": "content", "data-astro-cid-iu4tusuk": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="page-panel" data-astro-cid-iu4tusuk> ${renderComponent($$result3, "PageHeader", $$PageHeader, { "title": "RSS", "subtitle": "文章更新订阅", "data-astro-cid-iu4tusuk": true })} <section class="rss-section glass" data-astro-cid-iu4tusuk> <div class="rss-icon" data-astro-cid-iu4tusuk> ${renderComponent($$result3, "Icon", $$Icon, { "name": "fa7-solid:rss", "data-astro-cid-iu4tusuk": true })} </div> <div class="rss-content" data-astro-cid-iu4tusuk> <h2 class="rss-title" data-astro-cid-iu4tusuk>订阅 ${siteConfig.title}</h2> <p class="rss-text" data-astro-cid-iu4tusuk>
使用 RSS 阅读器订阅本站文章更新。浏览器图标入口会停留在这个页面，订阅源文件保持为标准 XML。
</p> <div class="rss-actions" data-astro-cid-iu4tusuk> <a class="rss-button primary"${addAttribute(rssUrl, "href")} data-astro-cid-iu4tusuk> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:open-in-new-rounded", "data-astro-cid-iu4tusuk": true })} <span data-astro-cid-iu4tusuk>打开订阅源</span> </a> <code class="rss-url" data-astro-cid-iu4tusuk>${rssUrl}</code> </div> </div> </section> </div> ` })} ` })}`;
}, "D:/AI/TEST/blog/shrei-blog/src/pages/rss.astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/rss.astro";
const $$url = "/blog/rss/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Rss,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
