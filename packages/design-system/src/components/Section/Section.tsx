import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@playmr/styled-system/jsx';
import { cva, type RecipeVariantProps } from '@playmr/styled-system/css';

type BaseProps = RecipeVariantProps<typeof sectionStyle> & {
  /**
   * Component content
   */
  children: React.ReactNode
}

type SectionProps = BaseProps & Omit<React.HTMLAttributes<HTMLElement>, keyof BaseProps>

const sectionStyle = cva({
  base: {
    boxSizing: 'border-box',
    background: 'transparent'
  },
  variants: {
    type: {
      'hero': {
        background: 'sectionHero'
      },
      'main': {
        background: 'sectionMain'
      },
      'body': {
        background: 'sectionBody'
      }
    }
  }
});

const StyledSection = styled('section', sectionStyle);

const Section = ({
  type,
  children,
  ...rest
}: SectionProps) => {
  return (
    <StyledSection type={type} {...rest}>
      {children}
    </StyledSection>
  )
};

export default Section;

Section.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}