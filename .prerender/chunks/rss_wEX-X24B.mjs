import rss from '@astrojs/rss';
import { g as getAllPosts, s as siteConfig, b as postUrl, p as postSlug } from './path_DqmOt-PZ.mjs';
import 'reading-time';

async function GET(context) {
  const posts = await getAllPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site ?? siteConfig.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: postUrl(postSlug(post)),
      categories: [post.data.category, ...post.data.tags]
    })),
    customData: `<language>zh-CN</language>`
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
