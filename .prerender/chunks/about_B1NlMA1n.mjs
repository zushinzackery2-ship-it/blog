import { c as createComponent, s as siteConfig, a as assetUrl } from './path_DqmOt-PZ.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_dw9cAcTW.mjs';
import { $ as $$BaseLayout, a as $$MainGrid, p as profileConfig, b as $$Icon } from './MainGrid_DRu8dJbX.mjs';
import { $ as $$PageHeader } from './PageHeader_B0wuCg2x.mjs';
import 'reading-time';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$About;
  const resolveLink = (url) => url.startsWith("http") || url.startsWith("mailto:") ? url : assetUrl(url);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "关于", "description": "关于本站", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainGrid", $$MainGrid, { "variant": "content", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="page-panel" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "PageHeader", $$PageHeader, { "title": "关于", "data-astro-cid-kh7btl4r": true })} <div class="about-grid" data-astro-cid-kh7btl4r> <div class="about-main" data-astro-cid-kh7btl4r> <section class="about-section glass" data-astro-cid-kh7btl4r> <h2 class="sec-title" data-astro-cid-kh7btl4r>我是谁</h2> <p class="about-text" data-astro-cid-kh7btl4r>
我是 <strong data-astro-cid-kh7btl4r>${profileConfig.name}</strong>，${profileConfig.bio}
本站记录我在逆向工程、图形驱动栈、Windows 内核、UE5 等方向的研究笔记。
</p> </section> <section class="about-section glass" data-astro-cid-kh7btl4r> <h2 class="sec-title" data-astro-cid-kh7btl4r>研究方向</h2> <div class="focus-grid" data-astro-cid-kh7btl4r> <div class="focus-item" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:article-rounded", "data-astro-cid-kh7btl4r": true })} <span data-astro-cid-kh7btl4r>Unity / IL2CPP 逆向</span> </div> <div class="focus-item" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:archive-outline-rounded", "data-astro-cid-kh7btl4r": true })} <span data-astro-cid-kh7btl4r>Windows 内核与异常分发</span> </div> <div class="focus-item" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:category-outline-rounded", "data-astro-cid-kh7btl4r": true })} <span data-astro-cid-kh7btl4r>图形驱动栈 Vulkan/DXGI/D3D12</span> </div> <div class="focus-item" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:tag-rounded", "data-astro-cid-kh7btl4r": true })} <span data-astro-cid-kh7btl4r>Unreal Engine 5 渲染</span> </div> <div class="focus-item" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:person-rounded", "data-astro-cid-kh7btl4r": true })} <span data-astro-cid-kh7btl4r>MCP 工具与架构设计</span> </div> </div> </section> <section class="about-section glass" data-astro-cid-kh7btl4r> <h2 class="sec-title" data-astro-cid-kh7btl4r>站点信息</h2> <p class="about-text" data-astro-cid-kh7btl4r>
本站自 <strong data-astro-cid-kh7btl4r>${siteConfig.startDate}</strong> 起运行，已持续 <strong class="accent"${addAttribute(siteConfig.startDate, "data-start-date")} data-astro-cid-kh7btl4r>0</strong> 天。
</p> </section> <section class="about-section glass" data-astro-cid-kh7btl4r> <h2 class="sec-title" data-astro-cid-kh7btl4r>技术栈</h2> <div class="tech-list" data-astro-cid-kh7btl4r> <span class="tech" data-astro-cid-kh7btl4r>Astro</span> <span class="tech" data-astro-cid-kh7btl4r>Tailwind CSS</span> <span class="tech" data-astro-cid-kh7btl4r>TypeScript</span> <span class="tech" data-astro-cid-kh7btl4r>Svelte</span> <span class="tech" data-astro-cid-kh7btl4r>Pagefind</span> <span class="tech" data-astro-cid-kh7btl4r>KaTeX</span> <span class="tech" data-astro-cid-kh7btl4r>Expressive Code</span> </div> </section> <section class="about-section glass" data-astro-cid-kh7btl4r> <h2 class="sec-title" data-astro-cid-kh7btl4r>联系方式</h2> <div class="contact-links" data-astro-cid-kh7btl4r> ${profileConfig.links.map((link) => renderTemplate`<a${addAttribute(resolveLink(link.url), "href")} class="contact-link"${addAttribute(link.url.startsWith("http") ? "_blank" : void 0, "target")} rel="noopener noreferrer" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "Icon", $$Icon, { "name": link.icon, "data-astro-cid-kh7btl4r": true })} <span data-astro-cid-kh7btl4r>${link.name}</span> </a>`)} </div> </section> </div> </div> </div> ` })} ` })}`;
}, "D:/AI/TEST/blog/shrei-blog/src/pages/about.astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/about.astro";
const $$url = "/blog/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
