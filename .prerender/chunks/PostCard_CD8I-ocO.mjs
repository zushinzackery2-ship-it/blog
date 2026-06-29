import { c as createComponent, p as postSlug, f as categoryUrl, t as tagUrl, l as formatDate, b as postUrl } from './path_DqmOt-PZ.mjs';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from './prerender_dw9cAcTW.mjs';
import { g as getPostReadingStats, b as $$Icon } from './MainGrid_DRu8dJbX.mjs';

const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostCard;
  const { post, index = 0, layout = "list" } = Astro2.props;
  const layoutClass = `layout-${layout}`;
  const { data } = post;
  const readingStats = await getPostReadingStats(post);
  const slug = postSlug(post);
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["post-card", layoutClass, { "is-pinned": data.pinned }], "class:list")}${addAttribute(layout, "data-layout")}${addAttribute(`--card-index: ${index}`, "style")} data-astro-cid-iyiqi2so> ${data.pinned && renderTemplate`<span class="card-material card-pinned-tint" aria-hidden="true" data-astro-cid-iyiqi2so></span>`} <div class="card-top" data-astro-cid-iyiqi2so> <div class="card-labels" data-astro-cid-iyiqi2so> ${data.pinned && renderTemplate`<span class="card-label card-label-pinned" data-astro-cid-iyiqi2so> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:push-pin", "data-astro-cid-iyiqi2so": true })} <span data-astro-cid-iyiqi2so>置顶</span> </span>`} <a${addAttribute(categoryUrl(data.category), "href")} class="card-label card-category" data-astro-cid-iyiqi2so> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:folder-outline-rounded", "data-astro-cid-iyiqi2so": true })} <span data-astro-cid-iyiqi2so>${data.category}</span> </a> ${data.tags.slice(0, 3).map((tag) => renderTemplate`<a${addAttribute(tagUrl(tag), "href")} class="card-label card-tag" data-astro-cid-iyiqi2so>
#${tag} </a>`)} </div> <span class="card-date" data-astro-cid-iyiqi2so>${formatDate(data.published)}</span> </div> <h2 class="card-title" data-astro-cid-iyiqi2so> <a${addAttribute(postUrl(slug), "href")} data-astro-cid-iyiqi2so>${data.title}</a> </h2> <p class="card-desc" data-astro-cid-iyiqi2so>${data.description}</p> <div class="card-bottom" data-astro-cid-iyiqi2so> <div class="card-meta" data-astro-cid-iyiqi2so> <span class="meta-item" data-astro-cid-iyiqi2so> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:schedule-rounded", "data-astro-cid-iyiqi2so": true })} <span data-astro-cid-iyiqi2so>${readingStats.minutes} 分钟</span> </span> </div> </div> </article>`;
}, "D:/AI/TEST/blog/shrei-blog/src/components/PostCard.astro", void 0);

export { $$PostCard as $ };
