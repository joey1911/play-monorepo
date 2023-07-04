import { defineTokens } from '@pandacss/dev';

export const colors = defineTokens.colors({
  primary: {
    value: '{colors.sky.700}'
  },
  secondary: {
    value: '{colors.sky.200}'
  },
  sectionHero: {
    value: '{colors.stone.800}'
  },
  sectionMain: {
    value: '{colors.slate.500}'
  },
  sectionBody: {
    value: '{colors.slate.300}'
  },
});