import { c as createComponent, k as base, p as postSlug, l as formatDate, f as categoryUrl, t as tagUrl, g as getAllPosts, r as renderEntry, m as getRelatedPosts, n as getAdjacentPosts, s as siteConfig, b as postUrl } from './path_DqmOt-PZ.mjs';
import { m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from './prerender_dw9cAcTW.mjs';
import { c as resolveReadingStats, b as $$Icon, $ as $$BaseLayout, a as $$MainGrid } from './MainGrid_DRu8dJbX.mjs';
import { $ as $$PostCard } from './PostCard_CD8I-ocO.mjs';

const $$PostHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostHeader;
  const { post, readingStats: providedReadingStats } = Astro2.props;
  const { data } = post;
  const readingStats = resolveReadingStats(providedReadingStats, post.body);
  return renderTemplate`${maybeRenderHead()}<header class="post-header" data-astro-cid-yl355ysp> <div class="breadcrumb" data-astro-cid-yl355ysp> <a${addAttribute(`${base}/posts/`, "href")} data-astro-cid-yl355ysp>文章</a> <span class="sep" data-astro-cid-yl355ysp>/</span> <span class="current" data-astro-cid-yl355ysp>${postSlug(post)}</span> </div> <h1 class="post-title" data-astro-cid-yl355ysp>${data.title}</h1> <p class="post-description" data-astro-cid-yl355ysp>${data.description}</p> <div class="post-meta" data-astro-cid-yl355ysp> <span class="meta-item" data-astro-cid-yl355ysp> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:calendar-month-outline-rounded", "data-astro-cid-yl355ysp": true })} <time${addAttribute(data.published.toISOString(), "datetime")} data-astro-cid-yl355ysp>${formatDate(data.published)}</time> </span> ${data.updated && renderTemplate`<span class="meta-item" data-astro-cid-yl355ysp> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:edit-calendar-outline-rounded", "data-astro-cid-yl355ysp": true })} <time${addAttribute(data.updated.toISOString(), "datetime")} data-astro-cid-yl355ysp>${formatDate(data.updated)}</time> </span>`} <span class="meta-item" data-astro-cid-yl355ysp> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:schedule-rounded", "data-astro-cid-yl355ysp": true })} <span data-astro-cid-yl355ysp>${readingStats.minutes} 分钟</span> </span> <span class="meta-item" data-astro-cid-yl355ysp> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:tag-rounded", "data-astro-cid-yl355ysp": true })} <span data-astro-cid-yl355ysp>${readingStats.words} 字</span> </span> <a${addAttribute(categoryUrl(data.category), "href")} class="meta-item meta-link" data-astro-cid-yl355ysp> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:folder-outline-rounded", "data-astro-cid-yl355ysp": true })} <span data-astro-cid-yl355ysp>${data.category}</span> </a> </div> ${data.tags.length > 0 && renderTemplate`<div class="post-tags" data-astro-cid-yl355ysp> ${data.tags.map((tag) => renderTemplate`<a${addAttribute(tagUrl(tag), "href")} class="tag" data-astro-cid-yl355ysp>#${tag}</a>`)} </div>`} </header>`;
}, "D:/AI/TEST/blog/shrei-blog/src/components/PostHeader.astro", void 0);

const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings, mobile = false } = Astro2.props;
  const tocHeadings = headings.filter((h) => h.depth >= 2 && h.depth <= 3);
  return renderTemplate`${tocHeadings.length > 0 && !mobile && renderTemplate`${maybeRenderHead()}<nav class="toc glass" data-astro-cid-xvrfupwn><div class="toc-title" data-astro-cid-xvrfupwn>目录</div><ul class="toc-list" data-astro-cid-xvrfupwn>${tocHeadings.map((h) => renderTemplate`<li${addAttribute(["toc-item", `depth-${h.depth}`], "class:list")} data-astro-cid-xvrfupwn><a${addAttribute(`#${h.slug}`, "href")} class="toc-link" data-astro-cid-xvrfupwn>${h.text}</a></li>`)}</ul></nav>`}${tocHeadings.length > 0 && mobile && renderTemplate`<details class="toc toc-mobile glass" data-astro-cid-xvrfupwn><summary class="toc-mobile-summary" data-astro-cid-xvrfupwn><span data-astro-cid-xvrfupwn>目录</span><span class="toc-mobile-count" data-astro-cid-xvrfupwn>${tocHeadings.length}</span></summary><ul class="toc-list" data-astro-cid-xvrfupwn>${tocHeadings.map((h) => renderTemplate`<li${addAttribute(["toc-item", `depth-${h.depth}`], "class:list")} data-astro-cid-xvrfupwn><a${addAttribute(`#${h.slug}`, "href")} class="toc-link" data-astro-cid-xvrfupwn>${h.text}</a></li>`)}</ul></details>`}`;
}, "D:/AI/TEST/blog/shrei-blog/src/components/TableOfContents.astro", void 0);

async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    params: { slug: postSlug(post) },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content, headings, remarkPluginFrontmatter } = await renderEntry(post);
  const allPosts = await getAllPosts();
  const related = getRelatedPosts(allPosts, post, 3);
  const adjacent = getAdjacentPosts(allPosts, post);
  const readingStats = resolveReadingStats(remarkPluginFrontmatter, post.body);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.data.title, "description": post.data.description, "type": "post", "data-astro-cid-gysqo7gh": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MainGrid", $$MainGrid, { "variant": "post", "data-astro-cid-gysqo7gh": true }, { "default": async ($$result3) => renderTemplate`  ${maybeRenderHead()}<article class="post-layout" data-astro-cid-gysqo7gh> ${renderComponent($$result3, "TableOfContents", $$TableOfContents, { "headings": headings, "mobile": true, "data-astro-cid-gysqo7gh": true })} <!-- 正文区 --> <div class="post-main glass onload-animation" data-astro-cid-gysqo7gh> ${renderComponent($$result3, "PostHeader", $$PostHeader, { "post": post, "readingStats": readingStats, "data-astro-cid-gysqo7gh": true })} <div class="prose" data-pagefind-body data-astro-cid-gysqo7gh> ${renderComponent($$result3, "Content", Content, { "data-astro-cid-gysqo7gh": true })} </div> <!-- 文章底部：版权 --> <footer class="post-license" data-astro-cid-gysqo7gh> <div class="license-watermark" data-astro-cid-gysqo7gh> ${renderComponent($$result3, "Icon", $$Icon, { "name": "fa7-brands:creative-commons", "data-astro-cid-gysqo7gh": true })} </div> <div class="license-icon" data-astro-cid-gysqo7gh> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:copyright-outline-rounded", "data-astro-cid-gysqo7gh": true })} </div> <div class="license-text" data-astro-cid-gysqo7gh> <div class="license-title" data-astro-cid-gysqo7gh> ${siteConfig.title} · ${post.data.title} </div> <div class="license-meta" data-astro-cid-gysqo7gh> <span data-astro-cid-gysqo7gh>作者: ${siteConfig.author}</span> <span data-astro-cid-gysqo7gh>·</span> <span data-astro-cid-gysqo7gh>发布于: ${formatDate(post.data.published)}</span> <span data-astro-cid-gysqo7gh>·</span> <span data-astro-cid-gysqo7gh>字数: ${readingStats.words}</span> <span data-astro-cid-gysqo7gh>·</span> <span data-astro-cid-gysqo7gh>阅读: ${readingStats.minutes}分钟</span> </div> <div class="license-note" data-astro-cid-gysqo7gh>
本站所有文章除特别声明外，均采用 CC BY-NC-SA 4.0 许可协议。转载请注明来自 ${siteConfig.title}。
</div> </div> </footer> <!-- 上下篇导航 --> ${(adjacent.prev || adjacent.next) && renderTemplate`<nav class="post-nav" data-astro-cid-gysqo7gh> ${adjacent.next && renderTemplate`<a${addAttribute(postUrl(postSlug(adjacent.next)), "href")} class="nav-item nav-next" data-astro-cid-gysqo7gh> <span class="nav-label" data-astro-cid-gysqo7gh> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:arrow-back-rounded", "data-astro-cid-gysqo7gh": true })}
上一篇
</span> <span class="nav-title" data-astro-cid-gysqo7gh>${adjacent.next.data.title}</span> </a>`} ${adjacent.prev && renderTemplate`<a${addAttribute(postUrl(postSlug(adjacent.prev)), "href")} class="nav-item nav-prev" data-astro-cid-gysqo7gh> <span class="nav-label" data-astro-cid-gysqo7gh>
下一篇
${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:arrow-forward-rounded", "data-astro-cid-gysqo7gh": true })} </span> <span class="nav-title" data-astro-cid-gysqo7gh>${adjacent.prev.data.title}</span> </a>`} </nav>`} </div> </article>  ${related.length > 0 && renderTemplate`<section class="related" data-astro-cid-gysqo7gh> <div class="related-head" data-astro-cid-gysqo7gh> <h2 class="related-title" data-astro-cid-gysqo7gh> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:auto-awesome-outline-rounded", "data-astro-cid-gysqo7gh": true })}
相关文章
</h2> </div> <div class="related-list" data-astro-cid-gysqo7gh> ${related.map((p, i) => renderTemplate`${renderComponent($$result3, "PostCard", $$PostCard, { "post": p, "index": i, "data-astro-cid-gysqo7gh": true })}`)} </div> </section>`}`, "right": async ($$result3) => renderTemplate`${renderComponent($$result3, "TableOfContents", $$TableOfContents, { "slot": "right", "headings": headings, "data-astro-cid-gysqo7gh": true })}` })} ` })}`;
}, "D:/AI/TEST/blog/shrei-blog/src/pages/posts/[slug].astro", void 0);

const $$file = "D:/AI/TEST/blog/shrei-blog/src/pages/posts/[slug].astro";
const $$url = "/blog/posts/[slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
