import { defineConfig } from "@pandacss/dev";
import {
  GlobalCss,
  TokensColors,
  SemanticTokensColors,
  SemanticTokensSpacing,
  Recipes,
  textStyles
} from './src';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Global CSS
  globalCss: GlobalCss,

  // Useful for theme customization
  theme: {
    textStyles,
    extend: {
      tokens: {
        colors: TokensColors
      },
      semanticTokens: {
        colors: SemanticTokensColors,
        spacing: SemanticTokensSpacing
      },
      recipes: Recipes,
    }
  },

  // Enable JSX Support (styled)
  jsxFramework: "react",

  // The output directory for your css system
  emitPackage: true,
  outdir: "@playmr/styled-system"
});