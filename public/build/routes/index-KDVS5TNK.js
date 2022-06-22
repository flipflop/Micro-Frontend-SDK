import {
  Typography_default
} from "/build/_shared/chunk-HXHRLSCW.js";
import {
  Link,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-7TH6THZX.js";

// browser-route-module:/Users/rchivers/Projects/Micro-Frontend-SDK/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var React = __toESM(require_react());
var meta = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography_default, {
    variant: "h4",
    component: "h1",
    gutterBottom: true
  }, "Remix with TypeScript example"), /* @__PURE__ */ React.createElement(Link, {
    to: "/about",
    color: "secondary"
  }, "Go to the about page"));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-KDVS5TNK.js.map
