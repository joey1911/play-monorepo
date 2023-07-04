import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@playmr/styled-system/jsx';
import { cva, type RecipeVariantProps } from '@playmr/styled-system/css';

type BaseProps = RecipeVariantProps<typeof genericStyle> & {
  /**
   * Component content
   */
  children: React.ReactNode
}

type GenericProps = BaseProps & Omit<React.HTMLAttributes<HTMLElement>, keyof BaseProps>

const genericStyle = cva({
  base: {
  },
  variants: {
  }
});

const StyledGeneric = styled('section', genericStyle);

const Generic = ({
  children,
  ...rest
}: GenericProps) => {
  return (
    <StyledGeneric {...rest}>
      {children}
    </StyledGeneric>
  )
};

export default Generic;

Generic.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}