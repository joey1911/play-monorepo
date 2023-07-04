import { defineSemanticTokens } from '@pandacss/dev';

export const spacing = defineSemanticTokens.spacing({
  xs: {
    value: '{spacing.3.5}'
  },
  sm: {
    value: '{spacing.6}'
  },
  md: {
    value: '{spacing.10}'
  },
  lg: {
    value: '{spacing.16}'
  }
});