import {
  Typography_default
} from "/build/_shared/chunk-PHYOCSJY.js";
import {
  Link,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-DAJFFMJP.js";

// browser-route-module:/Users/rchivers/Projects/Micro-Frontend-Framework/Micro-Frontend-SDK/remix-with-typescript/app/routes/index.tsx?browser
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
//# sourceMappingURL=/build/routes/index-LQORBUD6.js.map
