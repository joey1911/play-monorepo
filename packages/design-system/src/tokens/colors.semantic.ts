import { defineSemanticTokens } from '@pandacss/dev';

export const colors = defineSemanticTokens.colors({
  brand: {
    value: '{colors.cyan.300}'
  },
  warning: {
    value: '{colors.red.700}'
  },
  success: {
    value: '{colors.green.700}'
  },
  info: {
    value: '{colors.sky.700}'
  }
});