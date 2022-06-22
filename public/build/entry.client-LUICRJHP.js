import {
  ClientStyleContext_default,
  CssBaseline_default,
  theme_default
} from "/build/_shared/chunk-N35KKQ2O.js";
import {
  CacheProvider,
  RemixBrowser,
  ThemeProvider_default,
  __toESM,
  emotion_cache_browser_esm_default,
  init_emotion_cache_browser_esm,
  init_emotion_react_browser_esm,
  init_react,
  require_react,
  require_react_dom
} from "/build/_shared/chunk-7TH6THZX.js";

// app/entry.client.tsx
init_react();
var React2 = __toESM(require_react());
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
init_emotion_react_browser_esm();

// app/src/createEmotionCache.ts
init_react();
init_emotion_cache_browser_esm();
function createEmotionCache() {
  return emotion_cache_browser_esm_default({ key: "css" });
}

// app/entry.client.tsx
function ClientCacheProvider({ children }) {
  const [cache, setCache] = (0, import_react.useState)(createEmotionCache());
  function reset() {
    setCache(createEmotionCache());
  }
  return /* @__PURE__ */ React2.createElement(ClientStyleContext_default.Provider, {
    value: { reset }
  }, /* @__PURE__ */ React2.createElement(CacheProvider, {
    value: cache
  }, children));
}
(0, import_react_dom.hydrate)(/* @__PURE__ */ React2.createElement(ClientCacheProvider, null, /* @__PURE__ */ React2.createElement(ThemeProvider_default, {
  theme: theme_default
}, /* @__PURE__ */ React2.createElement(CssBaseline_default, null), /* @__PURE__ */ React2.createElement(RemixBrowser, null))), document);
//# sourceMappingURL=/build/entry.client-LUICRJHP.js.map
