import {
  __toESM,
  createTheme_default,
  init_react,
  red_default,
  require_react
} from "/build/_shared/chunk-DAJFFMJP.js";

// node_modules/@mui/material/styles/ThemeProvider.js
init_react();

// node_modules/@mui/material/styles/index.js
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
  ClientStyleContext_default,
  theme_default
};
//# sourceMappingURL=/build/_shared/chunk-65VGS75I.js.map
