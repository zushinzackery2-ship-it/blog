import { c as createComponent, t as tagUrl, g as getAllPosts, q as groupByTag } from './path_DqmOt-PZ.mjs';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from './prerender_dw9cAcTW.mjs';
import { $ as $$BaseLayout, a as $$MainGrid } from './MainGrid_DRu8dJbX.mjs';
import { $ as $$PageHeader } from './PageHeader_B0wuCg2x.mjs';
import 'reading-time';

const $$TagCloud = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TagCloud;
  const { tags } = Astro2.props;
  const maxCount = Math.max(...tags.map((t) => t.count), 1);
  const sizeFor = (count) => {
    const min = 0.78;
    const max = 1.35;
    return `${min + (max - min) * (count / maxCount)}rem`;
  };
  return renderTemplate`${maybeRenderHead()}<div class="tag-cloud" data-astro-cid-6pyqhcr2> ${tags.map((t) => renderTemplate`<a${addAttribute(tagUrl(t.tag), "href")} class="tag"${addAttribute(`font-size: ${sizeFor(t.count)}`, "style")}${addAttribute(`${t.tag} (${t.count})`, "title")} data-astro-cid-6pyqhcr2> <span class="hash" data-astro-cid-6pyqhcr2>#</span> ${t.tag} <span class="count" data-astro-cid-6pyqhcr2>${t.count}</span> </a>`)} </div>`;
}, "D:/AI/TEST/blog/shrei-blog/src/components/TagCloud.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPosts();
  const tags = groupByTag(allPosts);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "标签", "description": "文章标签", "data-astro-cid-os4i7owy": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MainGrid", $$MainGrid, { "variant": "content", "data-astro-cid-os4i7owy": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="page-panel" data-astro-cid-os4i7owy> ${renderComponent($$result3, "PageHeader", $$PageHeader, { "title": "标签", "subtitle": `共 ${tags.length} 个标签`, "data-astro-cid-os4i7owy": true })} <div class="tags-page glass" data-astro-cid-os4i7owy> ${renderComponent($$result3, "TagCloud", $$TagCloud, { "tags": tags, "data-astro-cid-os4i7owy": true })} </div> </div> ` })} ` })}`;
}, "D:/AI/TEST/blog/shrei-blog/src/pages/tags/index.astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/tags/index.astro";
const $$url = "/blog/tags/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
