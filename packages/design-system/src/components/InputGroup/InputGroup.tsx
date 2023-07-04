import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@playmr/styled-system/jsx';
import { cva, type RecipeVariantProps } from '@playmr/styled-system/css';

type BaseProps = RecipeVariantProps<typeof inputGroupStyle> & {
  /**
   * Input Element
   */
  inputElement: React.ReactNode,
  /**
   * Label Element
   */
  labelElement: React.ReactNode,
  /**
   * Input or Label first?
   */
  inputFirst?: boolean
}

type InputGroupProps = BaseProps & Omit<React.HTMLAttributes<HTMLElement>, keyof BaseProps>

const inputGroupStyle = cva({
  base: {
    display: 'flex'
  },
  variants: {
    orientation: {
      'vertical': {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '1'
      },
      'horizontal': {
        flexDirection: 'row',
        alignItems: 'center',
        gap: '2'
      }
    }
  }
});

const StyledInputGroup = styled('div', inputGroupStyle);

const InputGroup = ({
  inputElement,
  labelElement,
  inputFirst = false,
  orientation = 'vertical',
  ...rest
}: InputGroupProps) => {
  let childElements = (
    <>
      {labelElement}
      {inputElement}
    </>
  );

  if (inputFirst) {
    childElements = (
      <>
        {inputElement}
        {labelElement}
      </>
    );
  }

  return (
    <StyledInputGroup orientation={orientation} {...rest}>
      {childElements}
    </StyledInputGroup>
  )
};

export default InputGroup;

InputGroup.propTypes = {
  /**
   * Input Element
   */
  inputElement: PropTypes.element.isRequired,
  /**
   * Label Element
   */
  labelElement: PropTypes.element.isRequired,
  /**
   * Input or Label first?
   */
  inputFirst: PropTypes.bool
}