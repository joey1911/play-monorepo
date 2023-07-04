import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  'html, body': {
    color: 'neutral.900',
    lineHeight: '1.5'
  },
  'h1': {
    textStyle: 'h1'
  },
  'p': {
    textStyle: 'p'
  }
});