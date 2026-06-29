import { A as AstroError, h as InvalidComponentArgs, i as renderElement, j as generateCspDigest, s as spreadAttributes, u as unescapeHTML, a as renderTemplate, k as removeBase, l as isRemotePath, n as unflatten, U as UnknownContentCollectionError, o as object, p as date, q as array, R as RenderUndefinedEntryError, t as escape, v as string, w as prependForwardSlash, x as createHeadAndContent, r as renderComponent } from './prerender_dw9cAcTW.mjs';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

function renderScriptElement({ props, children }) {
  return renderElement("script", {
    props,
    children
  });
}
function renderUniqueStylesheet(result, sheet) {
  if (sheet.type === "external") {
    if (Array.from(result.styles).some((s) => s.props.href === sheet.src)) return "";
    return renderElement("link", { props: { rel: "stylesheet", href: sheet.src }, children: "" });
  }
  if (sheet.type === "inline") {
    if (Array.from(result.styles).some((s) => s.children.includes(sheet.content))) return "";
    return renderElement("style", { props: {}, children: sheet.content });
  }
}

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position",
  "background"
];

const siteConfig = {
  title: "Shrei",
  subtitle: "Develop & Deconstruct",
  url: "https://zushinzackery2-ship-it.github.io/blog/",
  description: "底层技术分析与实现过程，覆盖逆向工程、图形驱动栈、游戏引擎、操作系统内核与渲染管线设计",
  keywords: ["Shrei", "Reverse Engineering", "Graphics", "Vulkan", "DXGI", "D3D12", "IL2CPP"],
  author: "Shrei",
  lang: "zh_CN",
  timezone: "Asia/Shanghai",
  startDate: "2026-05-13",
  postsPerPage: 10,
  bannerTitle: "Develop & Deconstruct",
  bannerSubtitles: [
    "Build what you want",
    "Reverse what you see",
    "Graphics stack traces"
  ],
  bannerTitleSize: "3.8rem"
};

const presetMap = {
  Home: { name: "首页", url: "/", icon: "material-symbols:home-rounded" },
  Archive: { name: "归档", url: "/archive/", icon: "material-symbols:archive-outline-rounded" },
  Categories: {
    name: "分类",
    url: "/categories/",
    icon: "material-symbols:category-outline-rounded"
  },
  Tags: { name: "标签", url: "/tags/", icon: "material-symbols:tag-rounded" },
  About: { name: "关于", url: "/about/", icon: "material-symbols:person-rounded" }
};
const preset = (p) => presetMap[p];
const navBarConfig = {
  links: [
    preset("Home"),
    {
      name: "文章",
      url: "/posts/",
      icon: "material-symbols:article-rounded",
      children: [preset("Archive"), preset("Categories"), preset("Tags")]
    },
    preset("About"),
    {
      name: "联系",
      url: "/about/",
      icon: "material-symbols:link",
      children: [
        {
          name: "GitHub",
          url: "https://github.com/zushinzackery2-ship-it",
          external: true,
          icon: "fa7-brands:github"
        },
        {
          name: "QQ: 3267941496",
          url: "https://wpa.qq.com/msgrd?v=3&uin=3267941496&site=qq&menu=yes",
          external: true,
          icon: "fa7-brands:qq"
        },
        {
          name: "Email",
          url: "mailto:zushinzackery2@gmail.com",
          external: true,
          icon: "fa7-solid:envelope"
        }
      ]
    }
  ]
};

const excludedWallpaperFiles = /* @__PURE__ */ new Set([]);
const wallpaperImages = Object.keys(
  {"../assets/images/arch-minimal-wallpapers/wp-01.png": 0,"../assets/images/arch-minimal-wallpapers/wp-02.png": 0,"../assets/images/arch-minimal-wallpapers/wp-03.jpg": 0,"../assets/images/arch-minimal-wallpapers/wp-04.png": 0,"../assets/images/arch-minimal-wallpapers/wp-05.png": 0,"../assets/images/arch-minimal-wallpapers/wp-06.png": 0,"../assets/images/arch-minimal-wallpapers/wp-07.png": 0,"../assets/images/arch-minimal-wallpapers/wp-08.png": 0,"../assets/images/arch-minimal-wallpapers/wp-09.png": 0,"../assets/images/arch-minimal-wallpapers/wp-10.png": 0,"../assets/images/arch-minimal-wallpapers/wp-11.png": 0,"../assets/images/arch-minimal-wallpapers/wp-12.png": 0,"../assets/images/arch-minimal-wallpapers/wp-13.png": 0,"../assets/images/arch-minimal-wallpapers/wp-14.png": 0,"../assets/images/arch-minimal-wallpapers/wp-15.jpg": 0,"../assets/images/arch-minimal-wallpapers/wp-16.jpg": 0,"../assets/images/arch-minimal-wallpapers/wp-17.png": 0,"../assets/images/arch-minimal-wallpapers/wp-18.png": 0,"../assets/images/arch-minimal-wallpapers/wp-19.png": 0,"../assets/images/arch-minimal-wallpapers/wp-20.png": 0,"../assets/images/arch-minimal-wallpapers/wp-21.jpg": 0,"../assets/images/arch-minimal-wallpapers/wp-22.jpg": 0,"../assets/images/arch-minimal-wallpapers/wp-23.png": 0,"../assets/images/arch-minimal-wallpapers/wp-24.jpg": 0,"../assets/images/arch-minimal-wallpapers/wp-25.jpg": 0,"../assets/images/arch-minimal-wallpapers/wp-26.png": 0,"../assets/images/arch-minimal-wallpapers/wp-27.jpg": 0}
).sort((a, b) => a.localeCompare(b, void 0, { numeric: true, sensitivity: "base" })).filter((path) => !excludedWallpaperFiles.has(path.split("/").pop() || "")).map((path) => path.replace("../", ""));
const wallpaperConfig = {
  images: wallpaperImages,
  dimOpacity: 0,
  blur: 4,
  overlayOpacity: 1,
  gradientHeight: "6vh"
};

var e=e=>Object.prototype.toString.call(e),t=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),o=t=>"[object Date]"===e(t),n=t=>"[object RegExp]"===e(t),r=t=>"[object Error]"===e(t),s=t=>"[object Boolean]"===e(t),l=t=>"[object Number]"===e(t),i=t=>"[object String]"===e(t),c=Array.isArray,u=Object.getOwnPropertyDescriptor,a=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.keys;function d(e){const t=h(e),o=f(e);for(let n=0;n<o.length;n++)a.call(e,o[n])&&t.push(o[n]);return t}function b(e,t){return !u(e,t)?.writable}function y(e,u){if("object"==typeof e&&null!==e){let a;if(c(e))a=[];else if(o(e))a=new Date(e.getTime?e.getTime():e);else if(n(e))a=new RegExp(e);else if(r(e))a={message:e.message};else if(s(e)||l(e)||i(e))a=Object(e);else {if(t(e))return e.slice();a=Object.create(Object.getPrototypeOf(e));}const f=u.includeSymbols?d:h;for(const t of f(e))a[t]=e[t];return a}return e}var g={includeSymbols:false,immutable:false};function m(e,t,o=g){const n=[],r=[];let s=true;const l=o.includeSymbols?d:h,i=!!o.immutable;return function e(u){const a=i?y(u,o):u,f={};let h=true;const d={node:a,node_:u,path:[].concat(n),parent:r[r.length-1],parents:r,key:n[n.length-1],isRoot:0===n.length,level:n.length,circular:void 0,isLeaf:false,notLeaf:true,notRoot:true,isFirst:false,isLast:false,update:function(e,t=false){d.isRoot||(d.parent.node[d.key]=e),d.node=e,t&&(h=false);},delete:function(e){delete d.parent.node[d.key],e&&(h=false);},remove:function(e){c(d.parent.node)?d.parent.node.splice(d.key,1):delete d.parent.node[d.key],e&&(h=false);},keys:null,before:function(e){f.before=e;},after:function(e){f.after=e;},pre:function(e){f.pre=e;},post:function(e){f.post=e;},stop:function(){s=false;},block:function(){h=false;}};if(!s)return d;function g(){if("object"==typeof d.node&&null!==d.node){d.keys&&d.node_===d.node||(d.keys=l(d.node)),d.isLeaf=0===d.keys.length;for(let e=0;e<r.length;e++)if(r[e].node_===u){d.circular=r[e];break}}else d.isLeaf=true,d.keys=null;d.notLeaf=!d.isLeaf,d.notRoot=!d.isRoot;}g();const m=t(d,d.node);if(void 0!==m&&d.update&&d.update(m),f.before&&f.before(d,d.node),!h)return d;if("object"==typeof d.node&&null!==d.node&&!d.circular){r.push(d),g();for(const[t,o]of Object.entries(d.keys??[])){n.push(o),f.pre&&f.pre(d,d.node[o],o);const r=e(d.node[o]);i&&p.call(d.node,o)&&!b(d.node,o)&&(d.node[o]=r.node),r.isLast=!!d.keys?.length&&+t==d.keys.length-1,r.isFirst=0==+t,f.post&&f.post(d,r),n.pop();}r.pop();}return f.after&&f.after(d,d.node),d}(e).node}var j=class{#e;#t;constructor(e,t=g){this.#e=e,this.#t=t;}get(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return;t=t[n];}return t}has(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return  false;t=t[n];}return  true}set(e,t){let o=this.#e,n=0;for(n=0;n<e.length-1;n++){const t=e[n];p.call(o,t)||(o[t]={}),o=o[t];}return o[e[n]]=t,t}map(e){return m(this.#e,e,{immutable:true,includeSymbols:!!this.#t.includeSymbols})}forEach(e){return this.#e=m(this.#e,e,this.#t),this.#e}reduce(e,t){const o=1===arguments.length;let n=o?this.#e:t;return this.forEach(((t,r)=>{t.isRoot&&o||(n=e(t,n,r));})),n}paths(){const e=[];return this.forEach((t=>{e.push(t.path);})),e}nodes(){const e=[];return this.forEach((t=>{e.push(t.node);})),e}clone(){const e=[],o=[],n=this.#t;return t(this.#e)?this.#e.slice():function t(r){for(let t=0;t<e.length;t++)if(e[t]===r)return o[t];if("object"==typeof r&&null!==r){const s=y(r,n);e.push(r),o.push(s);const l=n.includeSymbols?d:h;for(const e of l(r))s[e]=t(r[e]);return e.pop(),o.pop(),s}return r}(this.#e)}};

function createSvgComponent({ meta, attributes, children, styles }) {
  const hasStyles = styles.length > 0;
  const Component = createComponent({
    async factory(result, props) {
      const normalizedProps = normalizeProps(attributes, props);
      if (hasStyles && result.cspDestination) {
        for (const style of styles) {
          const hash = await generateCspDigest(style, result.cspAlgorithm);
          result._metadata.extraStyleHashes.push(hash);
        }
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
    },
    propagation: hasStyles ? "self" : "none"
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BMSBJMVG.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

object({
  tags: array(string()).optional(),
  lastModified: date().optional()
});
function createGetCollection({
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DloNRoa4.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DloNRoa4.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_virtual_astro_get-image_BThlBDwa.mjs');
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(
        imagePath.replace(/&(?:#x22|quot);/g, '"').replace(/&(?:#x27|apos);/g, "'")
      );
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...{}
    }).filter(([, value]) => value != null).map(([key, value]) => value === "" ? `${key}=""` : `${key}="${escape(String(value))}"`).join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  const copy = structuredClone(data);
  new j(copy).forEach(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        if (imported.__svgData) {
          const { __svgData: svgData, ...meta } = imported;
          ctx.update(createSvgComponent({ meta, ...svgData }));
        } else {
          ctx.update(imported);
        }
      } else {
        ctx.update(src);
      }
    }
  });
  return copy;
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: isRemotePath(link) ? link : prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const getCollection = createGetCollection({
	liveCollections,
});

function postSlug(post) {
  return post.id;
}
async function getAllPosts() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.sort(byPublishedDesc);
}
function getPinnedPosts(posts) {
  return posts.filter((post) => post.data.pinned).sort(byPublishedDesc);
}
function getRegularPosts(posts) {
  return posts.filter((post) => !post.data.pinned).sort(byPublishedDesc);
}
function paginate(items, page, perPage) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  const end = start + perPage;
  return {
    items: items.slice(start, end),
    total,
    page: safePage,
    totalPages,
    hasPrev: safePage > 1,
    hasNext: safePage < totalPages
  };
}
function getCategories(posts) {
  const set = /* @__PURE__ */ new Set();
  for (const post of posts) {
    set.add(post.data.category);
  }
  return [...set].sort();
}
function getTags(posts) {
  const set = /* @__PURE__ */ new Set();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      set.add(tag);
    }
  }
  return [...set].sort();
}
function getPostsByCategory(posts, category) {
  return posts.filter((post) => post.data.category === category);
}
function getPostsByTag(posts, tag) {
  return posts.filter((post) => post.data.tags.includes(tag));
}
function groupByCategory(posts) {
  const map = /* @__PURE__ */ new Map();
  for (const post of posts) {
    const group = map.get(post.data.category) ?? [];
    group.push(post);
    map.set(post.data.category, group);
  }
  return [...map.entries()].map(([category, groupedPosts]) => ({
    category,
    count: groupedPosts.length,
    posts: groupedPosts
  })).sort((a, b) => b.count - a.count);
}
function groupByTag(posts) {
  const map = /* @__PURE__ */ new Map();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      map.set(tag, (map.get(tag) ?? 0) + 1);
    }
  }
  return [...map.entries()].map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count);
}
function getRelatedPosts(posts, current, limit = 3) {
  const currentSlug = postSlug(current);
  const scored = posts.filter((post) => postSlug(post) !== currentSlug).map((post) => {
    const tagOverlap = post.data.tags.filter((tag) => current.data.tags.includes(tag)).length;
    const sameCategory = post.data.category === current.data.category ? 1 : 0;
    return { post, score: tagOverlap * 2 + sameCategory };
  }).filter((entry) => entry.score > 0).sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((entry) => entry.post);
}
function byPublishedDesc(a, b) {
  return b.data.published.getTime() - a.data.published.getTime();
}
function getAdjacentPosts(posts, current) {
  const sorted = [...posts].sort(byPublishedDesc);
  const index = sorted.findIndex((post) => post.id === current.id);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index + 1 < sorted.length ? sorted[index + 1] : null,
    next: index - 1 >= 0 ? sorted[index - 1] : null
  };
}

dayjs.extend(utc);
dayjs.extend(timezone);
const TZ = "Asia/Shanghai";
const FMT_DATE = "YYYY-MM-DD";
function formatDate(date) {
  return dayjs(date).tz(TZ).format(FMT_DATE);
}

const BASE = (() => {
  try {
    const url = new URL(siteConfig.url);
    const path = url.pathname.replace(/\/+$/, "");
    return path || "";
  } catch {
    return "";
  }
})();
const base = BASE;
function postUrl(slug) {
  return `${BASE}/posts/${slug}/`;
}
function categoryUrl(category) {
  return `${BASE}/categories/${encodeURIComponent(category)}/`;
}
function tagUrl(tag) {
  return `${BASE}/tags/${encodeURIComponent(tag)}/`;
}
function archiveUrl() {
  return `${BASE}/archive/`;
}
function pageUrl(page, base_path = "/posts/") {
  return page === 1 ? `${BASE}${base_path}` : `${BASE}${base_path}page/${page}/`;
}
function homeUrl() {
  return `${BASE}/`;
}
function assetUrl(path) {
  if (path.startsWith("http") || path.startsWith("//")) {
    return path;
  }
  if (path.startsWith(BASE)) {
    return path;
  }
  return path.startsWith("/") ? `${BASE}${path}` : `${BASE}/${path}`;
}

export { getTags as A, DEFAULT_HASH_PROPS as B, DEFAULT_OUTPUT_FORMAT as D, VALID_SUPPORTED_FORMATS as V, assetUrl as a, postUrl as b, createComponent as c, getPostsByCategory as d, groupByCategory as e, categoryUrl as f, getAllPosts as g, homeUrl as h, getRegularPosts as i, paginate as j, base as k, formatDate as l, getRelatedPosts as m, getAdjacentPosts as n, getPostsByTag as o, postSlug as p, groupByTag as q, renderEntry as r, siteConfig as s, tagUrl as t, getPinnedPosts as u, pageUrl as v, navBarConfig as w, wallpaperConfig as x, archiveUrl as y, getCategories as z };
