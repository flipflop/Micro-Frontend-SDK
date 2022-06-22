var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var React2 = __toESM(require("react"));
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());

// app/src/createEmotionCache.ts
init_react();
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/src/theme.ts
init_react();
var import_styles = require("@mui/material/styles");
var import_colors = require("@mui/material/colors");
var theme = (0, import_styles.createTheme)({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: import_colors.red.A400
    }
  }
});
var theme_default = theme;

// app/entry.server.tsx
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline"));
var import_styles2 = require("@mui/material/styles");
var import_react = require("@emotion/react");
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  const MuiRemixServer = () => /* @__PURE__ */ React2.createElement(import_react.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React2.createElement(import_styles2.ThemeProvider, {
    theme: theme_default
  }, /* @__PURE__ */ React2.createElement(import_CssBaseline.default, null), /* @__PURE__ */ React2.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const html = (0, import_server.renderToString)(/* @__PURE__ */ React2.createElement(MuiRemixServer, null));
  const { styles } = extractCriticalToChunks(html);
  let stylesHTML = "";
  styles.forEach(({ key, ids, css }) => {
    const emotionKey = `${key} ${ids.join(" ")}`;
    const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });
  const markup = html.replace(/<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/, `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`);
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/rchivers/Projects/Micro-Frontend-SDK/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App
});
init_react();
var React12 = __toESM(require("react"));
var import_remix2 = __toESM(require_remix());
var import_react3 = require("@emotion/react");
var import_material = require("@mui/material");

// app/src/ClientStyleContext.tsx
init_react();
var import_react2 = require("react");
var ClientStyleContext_default = (0, import_react2.createContext)({
  reset: () => {
  }
});

// app/src/Layout.tsx
init_react();
var React5 = __toESM(require("react"));
var import_Container = __toESM(require("@mui/material/Container"));
var import_Box = __toESM(require("@mui/material/Box"));

// app/src/ProTip.tsx
init_react();
var React3 = __toESM(require("react"));
var import_Link = __toESM(require("@mui/material/Link"));
var import_SvgIcon = __toESM(require("@mui/material/SvgIcon"));
var import_Typography = __toESM(require("@mui/material/Typography"));
function LightBulbIcon(props) {
  return /* @__PURE__ */ React3.createElement(import_SvgIcon.default, __spreadValues({}, props), /* @__PURE__ */ React3.createElement("path", {
    d: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
  }));
}
function ProTip() {
  return /* @__PURE__ */ React3.createElement(import_Typography.default, {
    sx: { mt: 6, mb: 3 },
    color: "text.secondary"
  }, /* @__PURE__ */ React3.createElement(LightBulbIcon, {
    sx: { mr: 1, verticalAlign: "middle" }
  }), "Pro tip: See more ", /* @__PURE__ */ React3.createElement(import_Link.default, {
    href: "https://mui.com/getting-started/templates/"
  }, "templates"), " on the MUI documentation.");
}

// app/src/Copyright.tsx
init_react();
var React4 = __toESM(require("react"));
var import_Typography2 = __toESM(require("@mui/material/Typography"));
var import_Link2 = __toESM(require("@mui/material/Link"));
function Copyright() {
  return /* @__PURE__ */ React4.createElement(import_Typography2.default, {
    variant: "body2",
    color: "text.secondary",
    align: "center"
  }, "Copyright \xA9 ", /* @__PURE__ */ React4.createElement(import_Link2.default, {
    color: "inherit",
    href: "https://mui.com/"
  }, "Your Website"), " ", new Date().getFullYear(), ".");
}

// app/src/Layout.tsx
function Layout({ children }) {
  return /* @__PURE__ */ React5.createElement(import_Container.default, {
    maxWidth: "sm"
  }, /* @__PURE__ */ React5.createElement(import_Box.default, {
    sx: { my: 4 }
  }, children, /* @__PURE__ */ React5.createElement(ProTip, null), /* @__PURE__ */ React5.createElement(Copyright, null)));
}

// app/src/dashboard/Dashboard.tsx
init_react();
var React11 = __toESM(require("react"));
var import_styles4 = require("@mui/material/styles");
var import_CssBaseline2 = __toESM(require("@mui/material/CssBaseline"));
var import_Drawer = __toESM(require("@mui/material/Drawer"));
var import_Box2 = __toESM(require("@mui/material/Box"));
var import_AppBar = __toESM(require("@mui/material/AppBar"));
var import_Toolbar = __toESM(require("@mui/material/Toolbar"));
var import_List = __toESM(require("@mui/material/List"));
var import_Typography5 = __toESM(require("@mui/material/Typography"));
var import_Divider = __toESM(require("@mui/material/Divider"));
var import_IconButton = __toESM(require("@mui/material/IconButton"));
var import_Badge = __toESM(require("@mui/material/Badge"));
var import_Container2 = __toESM(require("@mui/material/Container"));
var import_Grid = __toESM(require("@mui/material/Grid"));
var import_Paper = __toESM(require("@mui/material/Paper"));
var import_Link5 = __toESM(require("@mui/material/Link"));
var import_Menu = __toESM(require("@mui/icons-material/Menu"));
var import_ChevronLeft = __toESM(require("@mui/icons-material/ChevronLeft"));
var import_Notifications = __toESM(require("@mui/icons-material/Notifications"));

// app/src/dashboard/listItems.tsx
init_react();
var React6 = __toESM(require("react"));
var import_ListItemButton = __toESM(require("@mui/material/ListItemButton"));
var import_ListItemIcon = __toESM(require("@mui/material/ListItemIcon"));
var import_ListItemText = __toESM(require("@mui/material/ListItemText"));
var import_ListSubheader = __toESM(require("@mui/material/ListSubheader"));
var import_Dashboard = __toESM(require("@mui/icons-material/Dashboard"));
var import_ShoppingCart = __toESM(require("@mui/icons-material/ShoppingCart"));
var import_People = __toESM(require("@mui/icons-material/People"));
var import_BarChart = __toESM(require("@mui/icons-material/BarChart"));
var import_Layers = __toESM(require("@mui/icons-material/Layers"));
var import_Assignment = __toESM(require("@mui/icons-material/Assignment"));
var mainListItems = /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(import_ListItemButton.default, null, /* @__PURE__ */ React6.createElement(import_ListItemIcon.default, null, /* @__PURE__ */ React6.createElement(import_Dashboard.default, null)), /* @__PURE__ */ React6.createElement(import_ListItemText.default, {
  primary: "Dashboard"
})), /* @__PURE__ */ React6.createElement(import_ListItemButton.default, null, /* @__PURE__ */ React6.createElement(import_ListItemIcon.default, null, /* @__PURE__ */ React6.createElement(import_ShoppingCart.default, null)), /* @__PURE__ */ React6.createElement(import_ListItemText.default, {
  primary: "Orders"
})), /* @__PURE__ */ React6.createElement(import_ListItemButton.default, null, /* @__PURE__ */ React6.createElement(import_ListItemIcon.default, null, /* @__PURE__ */ React6.createElement(import_People.default, null)), /* @__PURE__ */ React6.createElement(import_ListItemText.default, {
  primary: "Customers"
})), /* @__PURE__ */ React6.createElement(import_ListItemButton.default, null, /* @__PURE__ */ React6.createElement(import_ListItemIcon.default, null, /* @__PURE__ */ React6.createElement(import_BarChart.default, null)), /* @__PURE__ */ React6.createElement(import_ListItemText.default, {
  primary: "Reports"
})), /* @__PURE__ */ React6.createElement(import_ListItemButton.default, null, /* @__PURE__ */ React6.createElement(import_ListItemIcon.default, null, /* @__PURE__ */ React6.createElement(import_Layers.default, null)), /* @__PURE__ */ React6.createElement(import_ListItemText.default, {
  primary: "Integrations"
})));
var secondaryListItems = /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(import_ListSubheader.default, {
  component: "div",
  inset: true
}, "Saved reports"), /* @__PURE__ */ React6.createElement(import_ListItemButton.default, null, /* @__PURE__ */ React6.createElement(import_ListItemIcon.default, null, /* @__PURE__ */ React6.createElement(import_Assignment.default, null)), /* @__PURE__ */ React6.createElement(import_ListItemText.default, {
  primary: "Current month"
})), /* @__PURE__ */ React6.createElement(import_ListItemButton.default, null, /* @__PURE__ */ React6.createElement(import_ListItemIcon.default, null, /* @__PURE__ */ React6.createElement(import_Assignment.default, null)), /* @__PURE__ */ React6.createElement(import_ListItemText.default, {
  primary: "Last quarter"
})), /* @__PURE__ */ React6.createElement(import_ListItemButton.default, null, /* @__PURE__ */ React6.createElement(import_ListItemIcon.default, null, /* @__PURE__ */ React6.createElement(import_Assignment.default, null)), /* @__PURE__ */ React6.createElement(import_ListItemText.default, {
  primary: "Year-end sale"
})));

// app/src/dashboard/Chart.tsx
init_react();
var React8 = __toESM(require("react"));
var import_styles3 = require("@mui/material/styles");
var import_recharts = require("recharts");

// app/src/dashboard/Title.tsx
init_react();
var React7 = __toESM(require("react"));
var import_Typography3 = __toESM(require("@mui/material/Typography"));
function Title(props) {
  return /* @__PURE__ */ React7.createElement(import_Typography3.default, {
    component: "h2",
    variant: "h6",
    color: "primary",
    gutterBottom: true
  }, props.children);
}

// app/src/dashboard/Chart.tsx
function createData(time, amount) {
  return { time, amount };
}
var data = [
  createData("00:00", 0),
  createData("03:00", 300),
  createData("06:00", 600),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2e3),
  createData("18:00", 2400),
  createData("21:00", 2400),
  createData("24:00", void 0)
];
function Chart() {
  const theme2 = (0, import_styles3.useTheme)();
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement(Title, null, "Today"), /* @__PURE__ */ React8.createElement(import_recharts.ResponsiveContainer, null, /* @__PURE__ */ React8.createElement(import_recharts.LineChart, {
    data,
    margin: {
      top: 16,
      right: 16,
      bottom: 0,
      left: 24
    }
  }, /* @__PURE__ */ React8.createElement(import_recharts.XAxis, {
    dataKey: "time",
    stroke: theme2.palette.text.secondary,
    style: theme2.typography.body2
  }), /* @__PURE__ */ React8.createElement(import_recharts.YAxis, {
    stroke: theme2.palette.text.secondary,
    style: theme2.typography.body2
  }, /* @__PURE__ */ React8.createElement(import_recharts.Label, {
    angle: 270,
    position: "left",
    style: __spreadValues({
      textAnchor: "middle",
      fill: theme2.palette.text.primary
    }, theme2.typography.body1)
  }, "Sales ($)")), /* @__PURE__ */ React8.createElement(import_recharts.Line, {
    isAnimationActive: false,
    type: "monotone",
    dataKey: "amount",
    stroke: theme2.palette.primary.main,
    dot: false
  }))));
}

// app/src/dashboard/Deposits.tsx
init_react();
var React9 = __toESM(require("react"));
var import_Link3 = __toESM(require("@mui/material/Link"));
var import_Typography4 = __toESM(require("@mui/material/Typography"));
function preventDefault(event) {
  event.preventDefault();
}
function Deposits() {
  return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement(Title, null, "Recent Deposits"), /* @__PURE__ */ React9.createElement(import_Typography4.default, {
    component: "p",
    variant: "h4"
  }, "$3,024.00"), /* @__PURE__ */ React9.createElement(import_Typography4.default, {
    color: "text.secondary",
    sx: { flex: 1 }
  }, "on 15 March, 2019"), /* @__PURE__ */ React9.createElement("div", null, /* @__PURE__ */ React9.createElement(import_Link3.default, {
    color: "primary",
    href: "#",
    onClick: preventDefault
  }, "View balance")));
}

// app/src/dashboard/Orders.tsx
init_react();
var React10 = __toESM(require("react"));
var import_Link4 = __toESM(require("@mui/material/Link"));
var import_Table = __toESM(require("@mui/material/Table"));
var import_TableBody = __toESM(require("@mui/material/TableBody"));
var import_TableCell = __toESM(require("@mui/material/TableCell"));
var import_TableHead = __toESM(require("@mui/material/TableHead"));
var import_TableRow = __toESM(require("@mui/material/TableRow"));
function createData2(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}
var rows = [
  createData2(0, "16 Mar, 2019", "Elvis Presley", "Tupelo, MS", "VISA \u2800\u2022\u2022\u2022\u2022 3719", 312.44),
  createData2(1, "16 Mar, 2019", "Paul McCartney", "London, UK", "VISA \u2800\u2022\u2022\u2022\u2022 2574", 866.99),
  createData2(2, "16 Mar, 2019", "Tom Scholz", "Boston, MA", "MC \u2800\u2022\u2022\u2022\u2022 1253", 100.81),
  createData2(3, "16 Mar, 2019", "Michael Jackson", "Gary, IN", "AMEX \u2800\u2022\u2022\u2022\u2022 2000", 654.39),
  createData2(4, "15 Mar, 2019", "Bruce Springsteen", "Long Branch, NJ", "VISA \u2800\u2022\u2022\u2022\u2022 5919", 212.79)
];
function preventDefault2(event) {
  event.preventDefault();
}
function Orders() {
  return /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement(Title, null, "Recent Orders"), /* @__PURE__ */ React10.createElement(import_Table.default, {
    size: "small"
  }, /* @__PURE__ */ React10.createElement(import_TableHead.default, null, /* @__PURE__ */ React10.createElement(import_TableRow.default, null, /* @__PURE__ */ React10.createElement(import_TableCell.default, null, "Date"), /* @__PURE__ */ React10.createElement(import_TableCell.default, null, "Name"), /* @__PURE__ */ React10.createElement(import_TableCell.default, null, "Ship To"), /* @__PURE__ */ React10.createElement(import_TableCell.default, null, "Payment Method"), /* @__PURE__ */ React10.createElement(import_TableCell.default, {
    align: "right"
  }, "Sale Amount"))), /* @__PURE__ */ React10.createElement(import_TableBody.default, null, rows.map((row) => /* @__PURE__ */ React10.createElement(import_TableRow.default, {
    key: row.id
  }, /* @__PURE__ */ React10.createElement(import_TableCell.default, null, row.date), /* @__PURE__ */ React10.createElement(import_TableCell.default, null, row.name), /* @__PURE__ */ React10.createElement(import_TableCell.default, null, row.shipTo), /* @__PURE__ */ React10.createElement(import_TableCell.default, null, row.paymentMethod), /* @__PURE__ */ React10.createElement(import_TableCell.default, {
    align: "right"
  }, `$${row.amount}`))))), /* @__PURE__ */ React10.createElement(import_Link4.default, {
    color: "primary",
    href: "#",
    onClick: preventDefault2,
    sx: { mt: 3 }
  }, "See more orders"));
}

// app/src/dashboard/Dashboard.tsx
function Copyright2(props) {
  return /* @__PURE__ */ React11.createElement(import_Typography5.default, __spreadValues({
    variant: "body2",
    color: "text.secondary",
    align: "center"
  }, props), "Copyright \xA9 ", /* @__PURE__ */ React11.createElement(import_Link5.default, {
    color: "inherit",
    href: "https://mui.com/"
  }, "Your Website"), " ", new Date().getFullYear(), ".");
}
var drawerWidth = 240;
var AppBar = (0, import_styles4.styled)(import_AppBar.default, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme: theme2, open }) => __spreadValues({
  zIndex: theme2.zIndex.drawer + 1,
  transition: theme2.transitions.create(["width", "margin"], {
    easing: theme2.transitions.easing.sharp,
    duration: theme2.transitions.duration.leavingScreen
  })
}, open && {
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme2.transitions.create(["width", "margin"], {
    easing: theme2.transitions.easing.sharp,
    duration: theme2.transitions.duration.enteringScreen
  })
}));
var Drawer = (0, import_styles4.styled)(import_Drawer.default, { shouldForwardProp: (prop) => prop !== "open" })(({ theme: theme2, open }) => ({
  "& .MuiDrawer-paper": __spreadValues({
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme2.transitions.create("width", {
      easing: theme2.transitions.easing.sharp,
      duration: theme2.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box"
  }, !open && {
    overflowX: "hidden",
    transition: theme2.transitions.create("width", {
      easing: theme2.transitions.easing.sharp,
      duration: theme2.transitions.duration.leavingScreen
    }),
    width: theme2.spacing(7),
    [theme2.breakpoints.up("sm")]: {
      width: theme2.spacing(9)
    }
  })
}));
var mdTheme = (0, import_styles4.createTheme)();
function DashboardContent() {
  const [open, setOpen] = React11.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ React11.createElement(import_styles4.ThemeProvider, {
    theme: mdTheme
  }, /* @__PURE__ */ React11.createElement(import_Box2.default, {
    sx: { display: "flex" }
  }, /* @__PURE__ */ React11.createElement(import_CssBaseline2.default, null), /* @__PURE__ */ React11.createElement(AppBar, {
    position: "absolute",
    open
  }, /* @__PURE__ */ React11.createElement(import_Toolbar.default, {
    sx: {
      pr: "24px"
    }
  }, /* @__PURE__ */ React11.createElement(import_IconButton.default, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: __spreadValues({
      marginRight: "36px"
    }, open && { display: "none" })
  }, /* @__PURE__ */ React11.createElement(import_Menu.default, null)), /* @__PURE__ */ React11.createElement(import_Typography5.default, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: { flexGrow: 1 }
  }, "Dashboard"), /* @__PURE__ */ React11.createElement(import_IconButton.default, {
    color: "inherit"
  }, /* @__PURE__ */ React11.createElement(import_Badge.default, {
    badgeContent: 4,
    color: "secondary"
  }, /* @__PURE__ */ React11.createElement(import_Notifications.default, null))))), /* @__PURE__ */ React11.createElement(Drawer, {
    variant: "permanent",
    open
  }, /* @__PURE__ */ React11.createElement(import_Toolbar.default, {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      px: [1]
    }
  }, /* @__PURE__ */ React11.createElement(import_IconButton.default, {
    onClick: toggleDrawer
  }, /* @__PURE__ */ React11.createElement(import_ChevronLeft.default, null))), /* @__PURE__ */ React11.createElement(import_Divider.default, null), /* @__PURE__ */ React11.createElement(import_List.default, {
    component: "nav"
  }, mainListItems, /* @__PURE__ */ React11.createElement(import_Divider.default, {
    sx: { my: 1 }
  }), secondaryListItems)), /* @__PURE__ */ React11.createElement(import_Box2.default, {
    component: "main",
    sx: {
      backgroundColor: (theme2) => theme2.palette.mode === "light" ? theme2.palette.grey[100] : theme2.palette.grey[900],
      flexGrow: 1,
      height: "100vh",
      overflow: "auto"
    }
  }, /* @__PURE__ */ React11.createElement(import_Toolbar.default, null), /* @__PURE__ */ React11.createElement(import_Container2.default, {
    maxWidth: "lg",
    sx: { mt: 4, mb: 4 }
  }, /* @__PURE__ */ React11.createElement(import_Grid.default, {
    container: true,
    spacing: 3
  }, /* @__PURE__ */ React11.createElement(import_Grid.default, {
    item: true,
    xs: 12,
    md: 8,
    lg: 9
  }, /* @__PURE__ */ React11.createElement(import_Paper.default, {
    sx: {
      p: 2,
      display: "flex",
      flexDirection: "column",
      height: 240
    }
  }, /* @__PURE__ */ React11.createElement(Chart, null))), /* @__PURE__ */ React11.createElement(import_Grid.default, {
    item: true,
    xs: 12,
    md: 4,
    lg: 3
  }, /* @__PURE__ */ React11.createElement(import_Paper.default, {
    sx: {
      p: 2,
      display: "flex",
      flexDirection: "column",
      height: 240
    }
  }, /* @__PURE__ */ React11.createElement(Deposits, null))), /* @__PURE__ */ React11.createElement(import_Grid.default, {
    item: true,
    xs: 12
  }, /* @__PURE__ */ React11.createElement(import_Paper.default, {
    sx: { p: 2, display: "flex", flexDirection: "column" }
  }, /* @__PURE__ */ React11.createElement(Orders, null)))), /* @__PURE__ */ React11.createElement(Copyright2, {
    sx: { pt: 4 }
  })))));
}
function Dashboard() {
  return /* @__PURE__ */ React11.createElement(DashboardContent, null);
}

// route:/Users/rchivers/Projects/Micro-Frontend-SDK/app/root.tsx
var Document = (0, import_react3.withEmotionCache)(({ children, title }, emotionCache) => {
  const clientStyleData = React12.useContext(ClientStyleContext_default);
  (0, import_material.unstable_useEnhancedEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ React12.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React12.createElement("head", null, /* @__PURE__ */ React12.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React12.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React12.createElement("meta", {
    name: "theme-color",
    content: theme_default.palette.primary.main
  }), title ? /* @__PURE__ */ React12.createElement("title", null, title) : null, /* @__PURE__ */ React12.createElement(import_remix2.Meta, null), /* @__PURE__ */ React12.createElement(import_remix2.Links, null), /* @__PURE__ */ React12.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  }), /* @__PURE__ */ React12.createElement("meta", {
    name: "emotion-insertion-point",
    content: "emotion-insertion-point"
  })), /* @__PURE__ */ React12.createElement("body", null, children, /* @__PURE__ */ React12.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React12.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React12.createElement(import_remix2.LiveReload, null)));
});
function App() {
  return /* @__PURE__ */ React12.createElement(Document, null, /* @__PURE__ */ React12.createElement(Dashboard, null));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React12.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React12.createElement(Layout, null, /* @__PURE__ */ React12.createElement("div", null, /* @__PURE__ */ React12.createElement("h1", null, "There was an error"), /* @__PURE__ */ React12.createElement("p", null, error.message), /* @__PURE__ */ React12.createElement("hr", null), /* @__PURE__ */ React12.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  const caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React12.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React12.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React12.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React12.createElement(Layout, null, /* @__PURE__ */ React12.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}

// route:/Users/rchivers/Projects/Micro-Frontend-SDK/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
init_react();
var React13 = __toESM(require("react"));
var import_remix3 = __toESM(require_remix());
var import_Typography6 = __toESM(require("@mui/material/Typography"));
var import_Button = __toESM(require("@mui/material/Button"));
function About() {
  return /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement(import_Typography6.default, {
    variant: "h4",
    component: "h1",
    gutterBottom: true
  }, "Remix with TypeScript example"), /* @__PURE__ */ React13.createElement(import_Button.default, {
    variant: "contained",
    component: import_remix3.Link,
    to: "/"
  }, "Go to the main page"));
}

// route:/Users/rchivers/Projects/Micro-Frontend-SDK/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta
});
init_react();
var React14 = __toESM(require("react"));
var import_remix4 = __toESM(require_remix());
var import_Typography7 = __toESM(require("@mui/material/Typography"));
var meta = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Index() {
  return /* @__PURE__ */ React14.createElement(React14.Fragment, null, /* @__PURE__ */ React14.createElement(import_Typography7.default, {
    variant: "h4",
    component: "h1",
    gutterBottom: true
  }, "Remix with TypeScript example"), /* @__PURE__ */ React14.createElement(import_remix4.Link, {
    to: "/about",
    color: "secondary"
  }, "Go to the about page"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "deda179e", "entry": { "module": "/build/entry.client-LUICRJHP.js", "imports": ["/build/_shared/chunk-N35KKQ2O.js", "/build/_shared/chunk-7TH6THZX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-2I7DXTG3.js", "imports": ["/build/_shared/chunk-PLZMHGYS.js", "/build/_shared/chunk-HXHRLSCW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-MFRLKVJX.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-KDVS5TNK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-DEDA179E.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
