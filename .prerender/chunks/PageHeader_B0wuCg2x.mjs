import { c as createComponent } from './path_DqmOt-PZ.mjs';
import { m as maybeRenderHead, a as renderTemplate } from './prerender_dw9cAcTW.mjs';

const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="page-header" data-astro-cid-wu5dj4rx> <h1 class="page-title" data-astro-cid-wu5dj4rx>${title}</h1> ${subtitle && renderTemplate`<p class="page-subtitle" data-astro-cid-wu5dj4rx>${subtitle}</p>`} </div>`;
}, "D:/AI/TEST/blog/shrei-blog/src/components/PageHeader.astro", void 0);

export { $$PageHeader as $ };
