import {
  GlobalStyles,
  __toESM,
  _extends,
  createTheme_default,
  defaultTheme_default,
  init_createTheme,
  init_defaultTheme,
  init_esm2 as init_esm,
  init_extends,
  init_react,
  init_red,
  init_styled,
  init_useThemeProps,
  red_default,
  require_jsx_runtime,
  require_prop_types,
  require_react,
  useThemeProps,
  useTheme_default
} from "/build/_shared/chunk-7TH6THZX.js";

// node_modules/@mui/material/styles/ThemeProvider.js
init_react();
init_esm();

// node_modules/@mui/material/styles/index.js
init_react();
init_createTheme();

// node_modules/@mui/material/styles/useTheme.js
init_react();
var React2 = __toESM(require_react());
init_esm();
init_defaultTheme();
function useTheme() {
  const theme2 = useTheme_default(defaultTheme_default);
  if (true) {
    React2.useDebugValue(theme2);
  }
  return theme2;
}

// node_modules/@mui/material/styles/index.js
init_styled();

// node_modules/@mui/material/CssBaseline/CssBaseline.js
init_react();
init_extends();
var React4 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
init_useThemeProps();

// node_modules/@mui/material/GlobalStyles/index.js
init_react();

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
init_react();
init_extends();
var React3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_esm();
init_defaultTheme();
var import_jsx_runtime = __toESM(require_jsx_runtime());
function GlobalStyles2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalStyles, _extends({}, props, {
    defaultTheme: defaultTheme_default
  }));
}
true ? GlobalStyles2.propTypes = {
  styles: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.shape({
    __emotion_styles: import_prop_types.default.any.isRequired
  }), import_prop_types.default.string, import_prop_types.default.bool])
} : void 0;
var GlobalStyles_default = GlobalStyles2;

// node_modules/@mui/material/CssBaseline/CssBaseline.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var html = (theme2, enableColorScheme) => _extends({
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  boxSizing: "border-box",
  WebkitTextSizeAdjust: "100%"
}, enableColorScheme && {
  colorScheme: theme2.palette.mode
});
var body = (theme2) => _extends({
  color: (theme2.vars || theme2).palette.text.primary
}, theme2.typography.body1, {
  backgroundColor: (theme2.vars || theme2).palette.background.default,
  "@media print": {
    backgroundColor: (theme2.vars || theme2).palette.common.white
  }
});
var styles = (theme2, enableColorScheme = false) => {
  var _theme$components, _theme$components$Mui;
  let defaultStyles = {
    html: html(theme2, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: theme2.typography.fontWeightBold
    },
    body: _extends({
      margin: 0
    }, body(theme2), {
      "&::backdrop": {
        backgroundColor: (theme2.vars || theme2).palette.background.default
      }
    })
  };
  const themeOverrides = (_theme$components = theme2.components) == null ? void 0 : (_theme$components$Mui = _theme$components.MuiCssBaseline) == null ? void 0 : _theme$components$Mui.styleOverrides;
  if (themeOverrides) {
    defaultStyles = [defaultStyles, themeOverrides];
  }
  return defaultStyles;
};
function CssBaseline(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiCssBaseline"
  });
  const {
    children,
    enableColorScheme = false
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(React4.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(GlobalStyles_default, {
      styles: (theme2) => styles(theme2, enableColorScheme)
    }), children]
  });
}
true ? CssBaseline.propTypes = {
  children: import_prop_types2.default.node,
  enableColorScheme: import_prop_types2.default.bool
} : void 0;
var CssBaseline_default = CssBaseline;

// node_modules/@mui/material/CssBaseline/index.js
init_react();

// app/src/ClientStyleContext.tsx
init_react();
var import_react = __toESM(require_react());
var ClientStyleContext_default = (0, import_react.createContext)({
  reset: () => {
  }
});

// app/src/theme.ts
init_react();

// node_modules/@mui/material/colors/index.js
init_react();
init_red();

// app/src/theme.ts
var theme = createTheme_default({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red_default.A400
    }
  }
});
var theme_default = theme;

export {
  useTheme,
  CssBaseline_default,
  ClientStyleContext_default,
  theme_default
};
//# sourceMappingURL=/build/_shared/chunk-N35KKQ2O.js.map
