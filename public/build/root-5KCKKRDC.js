import {
  ClientStyleContext_default,
  theme_default
} from "/build/_shared/chunk-65VGS75I.js";
import {
  useForkRef_default,
  useIsFocusVisible_default
} from "/build/_shared/chunk-6GOWBZSX.js";
import {
  Typography_default,
  capitalize_default
} from "/build/_shared/chunk-PHYOCSJY.js";
import {
  ClassNameGenerator_default,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  _extends,
  _objectWithoutPropertiesLoose,
  alpha,
  clsx_m_default,
  composeClasses,
  createBox,
  createContainer,
  createTheme_default,
  elementTypeAcceptingRef_default,
  generateUtilityClass,
  generateUtilityClasses,
  getPath,
  init_extends,
  init_react,
  require_jsx_runtime,
  require_prop_types,
  require_react,
  styled_default,
  useCatch,
  useEnhancedEffect_default,
  useThemeProps,
  withEmotionCache
} from "/build/_shared/chunk-DAJFFMJP.js";

// browser-route-module:/Users/rchivers/Projects/Micro-Frontend-Framework/Micro-Frontend-SDK/remix-with-typescript/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var React7 = __toESM(require_react());

// node_modules/@mui/material/utils/index.js
init_react();

// node_modules/@mui/material/SvgIcon/index.js
init_react();

// node_modules/@mui/material/SvgIcon/SvgIcon.js
init_react();
init_extends();
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
init_react();
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
var useUtilityClasses = (ownerState) => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
var SvgIconRoot = styled_default("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$transitions2$d, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette$ownerState$c2, _palette2, _palette2$action, _palette3, _palette3$action;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null ? void 0 : (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme.transitions) == null ? void 0 : (_theme$transitions2$d = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2$d.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme.typography) == null ? void 0 : (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme.typography) == null ? void 0 : (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme.typography) == null ? void 0 : (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875"
    }[ownerState.fontSize],
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null ? void 0 : (_palette$ownerState$c2 = _palette[ownerState.color]) == null ? void 0 : _palette$ownerState$c2.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null ? void 0 : (_palette2$action = _palette2.action) == null ? void 0 : _palette2$action.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null ? void 0 : (_palette3$action = _palette3.action) == null ? void 0 : _palette3$action.disabled,
      inherit: void 0
    }[ownerState.color]
  };
});
var SvgIcon = /* @__PURE__ */ React2.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children,
    className,
    color = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(SvgIconRoot, _extends({
    as: component,
    className: clsx_m_default(classes.root, className),
    ownerState,
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, {
    children: [children, titleAccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
      children: titleAccess
    }) : null]
  }));
});
true ? SvgIcon.propTypes = {
  children: import_prop_types.default.node,
  classes: import_prop_types.default.object,
  className: import_prop_types.default.string,
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types.default.string]),
  component: import_prop_types.default.elementType,
  fontSize: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types.default.string]),
  htmlColor: import_prop_types.default.string,
  inheritViewBox: import_prop_types.default.bool,
  shapeRendering: import_prop_types.default.string,
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  titleAccess: import_prop_types.default.string,
  viewBox: import_prop_types.default.string
} : void 0;
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = SvgIcon;

// node_modules/@mui/material/utils/useEnhancedEffect.js
init_react();
var useEnhancedEffect_default2 = useEnhancedEffect_default;

// node_modules/@mui/material/Box/index.js
init_react();

// node_modules/@mui/material/Box/Box.js
init_react();
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@mui/material/className/index.js
init_react();

// node_modules/@mui/material/Box/Box.js
var defaultTheme = createTheme_default();
var Box = createBox({
  defaultTheme,
  defaultClassName: "MuiBox-root",
  generateClassName: ClassNameGenerator_default.generate
});
true ? Box.propTypes = {
  children: import_prop_types2.default.node,
  component: import_prop_types2.default.elementType,
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
} : void 0;
var Box_default = Box;

// node_modules/@mui/material/Container/index.js
init_react();

// node_modules/@mui/material/Container/Container.js
init_react();
var import_prop_types3 = __toESM(require_prop_types());
var Container = createContainer({
  createStyledComponent: styled_default("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[`maxWidth${capitalize_default(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
    }
  }),
  useThemeProps: (inProps) => useThemeProps({
    props: inProps,
    name: "MuiContainer"
  })
});
true ? Container.propTypes = {
  children: import_prop_types3.default.node,
  classes: import_prop_types3.default.object,
  component: import_prop_types3.default.elementType,
  disableGutters: import_prop_types3.default.bool,
  fixed: import_prop_types3.default.bool,
  maxWidth: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types3.default.string]),
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object])
} : void 0;
var Container_default = Container;

// node_modules/@mui/material/Link/index.js
init_react();

// node_modules/@mui/material/Link/Link.js
init_react();
init_extends();
var React3 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// node_modules/@mui/material/Link/linkClasses.js
init_react();
function getLinkUtilityClass(slot) {
  return generateUtilityClass("MuiLink", slot);
}
var linkClasses = generateUtilityClasses("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]);
var linkClasses_default = linkClasses;

// node_modules/@mui/material/Link/getTextDecoration.js
init_react();
var colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
};
var transformDeprecatedColors = (color) => {
  return colorTransformations[color] || color;
};
var getTextDecoration = ({
  theme,
  ownerState
}) => {
  const transformedColor = transformDeprecatedColors(ownerState.color);
  const color = getPath(theme, `palette.${transformedColor}`, false) || ownerState.color;
  const channelColor = getPath(theme, `palette.${transformedColor}Channel`);
  if ("vars" in theme && channelColor) {
    return `rgba(${channelColor} / 0.4)`;
  }
  return alpha(color, 0.4);
};
var getTextDecoration_default = getTextDecoration;

// node_modules/@mui/material/Link/Link.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded2 = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"];
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    component,
    focusVisible,
    underline
  } = ownerState;
  const slots = {
    root: ["root", `underline${capitalize_default(underline)}`, component === "button" && "button", focusVisible && "focusVisible"]
  };
  return composeClasses(slots, getLinkUtilityClass, classes);
};
var LinkRoot = styled_default(Typography_default, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`underline${capitalize_default(ownerState.underline)}`], ownerState.component === "button" && styles.button];
  }
})(({
  theme,
  ownerState
}) => {
  return _extends({}, ownerState.underline === "none" && {
    textDecoration: "none"
  }, ownerState.underline === "hover" && {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }, ownerState.underline === "always" && _extends({
    textDecoration: "underline"
  }, ownerState.color !== "inherit" && {
    textDecorationColor: getTextDecoration_default({
      theme,
      ownerState
    })
  }, {
    "&:hover": {
      textDecorationColor: "inherit"
    }
  }), ownerState.component === "button" && {
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    "&::-moz-focus-inner": {
      borderStyle: "none"
    },
    [`&.${linkClasses_default.focusVisible}`]: {
      outline: "auto"
    }
  });
});
var Link = /* @__PURE__ */ React3.forwardRef(function Link2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiLink"
  });
  const {
    className,
    color = "primary",
    component = "a",
    onBlur,
    onFocus,
    TypographyClasses,
    underline = "always",
    variant = "inherit",
    sx
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible_default();
  const [focusVisible, setFocusVisible] = React3.useState(false);
  const handlerRef = useForkRef_default(ref, focusVisibleRef);
  const handleBlur = (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleFocus = (event) => {
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const ownerState = _extends({}, props, {
    color,
    component,
    focusVisible,
    underline,
    variant
  });
  const classes = useUtilityClasses2(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LinkRoot, _extends({
    color,
    className: clsx_m_default(classes.root, className),
    classes: TypographyClasses,
    component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    ownerState,
    variant,
    sx: [...!Object.keys(colorTransformations).includes(color) ? [{
      color
    }] : [], ...Array.isArray(sx) ? sx : [sx]]
  }, other));
});
true ? Link.propTypes = {
  children: import_prop_types4.default.node,
  classes: import_prop_types4.default.object,
  className: import_prop_types4.default.string,
  color: import_prop_types4.default.any,
  component: elementTypeAcceptingRef_default,
  onBlur: import_prop_types4.default.func,
  onFocus: import_prop_types4.default.func,
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  TypographyClasses: import_prop_types4.default.object,
  underline: import_prop_types4.default.oneOf(["always", "hover", "none"]),
  variant: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), import_prop_types4.default.string])
} : void 0;
var Link_default = Link;

// app/src/Layout.tsx
init_react();
var React6 = __toESM(require_react());

// app/src/ProTip.tsx
init_react();
var React4 = __toESM(require_react());
function LightBulbIcon(props) {
  return /* @__PURE__ */ React4.createElement(SvgIcon_default, {
    ...props
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
  }));
}
function ProTip() {
  return /* @__PURE__ */ React4.createElement(Typography_default, {
    sx: { mt: 6, mb: 3 },
    color: "text.secondary"
  }, /* @__PURE__ */ React4.createElement(LightBulbIcon, {
    sx: { mr: 1, verticalAlign: "middle" }
  }), "Pro tip: See more ", /* @__PURE__ */ React4.createElement(Link_default, {
    href: "https://mui.com/getting-started/templates/"
  }, "templates"), " on the MUI documentation.");
}

// app/src/Copyright.tsx
init_react();
var React5 = __toESM(require_react());
function Copyright() {
  return /* @__PURE__ */ React5.createElement(Typography_default, {
    variant: "body2",
    color: "text.secondary",
    align: "center"
  }, "Copyright \xA9 ", /* @__PURE__ */ React5.createElement(Link_default, {
    color: "inherit",
    href: "https://mui.com/"
  }, "Your Website"), " ", new Date().getFullYear(), ".");
}

// app/src/Layout.tsx
function Layout({ children }) {
  return /* @__PURE__ */ React6.createElement(Container_default, {
    maxWidth: "sm"
  }, /* @__PURE__ */ React6.createElement(Box_default, {
    sx: { my: 4 }
  }, children, /* @__PURE__ */ React6.createElement(ProTip, null), /* @__PURE__ */ React6.createElement(Copyright, null)));
}

// app/root.tsx
var Document = withEmotionCache(({ children, title }, emotionCache) => {
  const clientStyleData = React7.useContext(ClientStyleContext_default);
  useEnhancedEffect_default2(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ React7.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React7.createElement("head", null, /* @__PURE__ */ React7.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React7.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React7.createElement("meta", {
    name: "theme-color",
    content: theme_default.palette.primary.main
  }), title ? /* @__PURE__ */ React7.createElement("title", null, title) : null, /* @__PURE__ */ React7.createElement(Meta, null), /* @__PURE__ */ React7.createElement(Links, null), /* @__PURE__ */ React7.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  }), /* @__PURE__ */ React7.createElement("meta", {
    name: "emotion-insertion-point",
    content: "emotion-insertion-point"
  })), /* @__PURE__ */ React7.createElement("body", null, children, /* @__PURE__ */ React7.createElement(ScrollRestoration, null), /* @__PURE__ */ React7.createElement(Scripts, null), /* @__PURE__ */ React7.createElement(LiveReload, null)));
});
function App() {
  return /* @__PURE__ */ React7.createElement(Document, null, /* @__PURE__ */ React7.createElement(Layout, null, /* @__PURE__ */ React7.createElement(Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React7.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React7.createElement(Layout, null, /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("h1", null, "There was an error"), /* @__PURE__ */ React7.createElement("p", null, error.message), /* @__PURE__ */ React7.createElement("hr", null), /* @__PURE__ */ React7.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  const caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React7.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React7.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React7.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React7.createElement(Layout, null, /* @__PURE__ */ React7.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default
};
//# sourceMappingURL=/build/root-5KCKKRDC.js.map
