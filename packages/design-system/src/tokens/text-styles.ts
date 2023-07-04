import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  h1: {
    description: 'H1 style',
    value: {
      fontFamily: 'sans',
      fontWeight: '600',
      fontSize: 'lg',
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none'
    }
  },
  p: {
    description: 'P style',
    value: {
      fontFamily: 'sans',
      fontWeight: '400',
      fontSize: 'md',
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none'
    }
  }
});