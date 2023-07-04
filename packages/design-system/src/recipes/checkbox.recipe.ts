import { defineRecipe } from "@pandacss/dev";

export const checkboxRecipe = defineRecipe({
  name: 'checkbox',
  description: 'The styles for the Checkbox component',
  base: {
    alignItems: 'center',
    appearance: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    lineHeight: '1',
    margin: '0',
    outline: 'none',
    padding: '0',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    color: 'primary',
    boxShadow: 'inset 0 0 0 1px token(colors.slate.700)',
    overflow: 'hidden',
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px token(colors.slate.800)'
    },
    '&:focus': {
      outline: 'none',
      borderColor: 'red.700',
      boxShadow: 'inset 0 0 0 1px token(colors.blue.900), 0 0 0 1px token(colors.blue.900)'
    }
  },
  variants: {
    size: {
      'sm': {
        width: '15px',
        height: '15px',
        borderRadius: '4px'
      },
      'lg': {
        width: '25px',
        height: '25px',
        borderRadius: '6px'
      },
    }
  }
});