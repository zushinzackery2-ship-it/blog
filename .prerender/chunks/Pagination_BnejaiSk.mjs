import { c as createComponent, v as pageUrl } from './path_DqmOt-PZ.mjs';
import { m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from './prerender_dw9cAcTW.mjs';
import { b as $$Icon } from './MainGrid_DRu8dJbX.mjs';
import 'reading-time';

const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Pagination;
  const { pagination, base = "/posts/" } = Astro2.props;
  const { page, totalPages, hasPrev, hasNext } = pagination;
  const pageUrl$1 = (p) => pageUrl(p, base);
  const windowSize = 2;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - page) <= windowSize) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="pagination" data-astro-cid-d776pwuy>${hasPrev && renderTemplate`<a${addAttribute(pageUrl$1(page - 1), "href")} class="page-btn page-nav" aria-label="上一页" data-astro-cid-d776pwuy>${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:chevron-left-rounded", "data-astro-cid-d776pwuy": true })}</a>`}${pages.map(
    (p) => p === "..." ? renderTemplate`<span class="ellipsis" data-astro-cid-d776pwuy>…</span>` : renderTemplate`<a${addAttribute(pageUrl$1(p), "href")}${addAttribute(["page-btn", { active: p === page }], "class:list")} data-astro-cid-d776pwuy>${p}</a>`
  )}${hasNext && renderTemplate`<a${addAttribute(pageUrl$1(page + 1), "href")} class="page-btn page-nav" aria-label="下一页" data-astro-cid-d776pwuy>${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:chevron-right-rounded", "data-astro-cid-d776pwuy": true })}</a>`}</nav>`}`;
}, "D:/AI/TEST/blog/shrei-blog/src/components/Pagination.astro", void 0);

export { $$Pagination as $ };
