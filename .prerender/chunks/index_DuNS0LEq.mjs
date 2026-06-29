import { c as createComponent } from './path_DqmOt-PZ.mjs';
import { r as renderComponent, a as renderTemplate } from './prerender_dw9cAcTW.mjs';
import { $ as $$HomePage } from './HomePage_CUKfuqmn.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HomePage", $$HomePage, { "pageNum": 1 })}`;
}, "D:/AI/TEST/blog/shrei-blog/src/pages/index.astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/index.astro";
const $$url = "/blog/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
