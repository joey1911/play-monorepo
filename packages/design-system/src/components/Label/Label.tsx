'use client'

import PropTypes from 'prop-types';
import * as LabelPrimitive from '@radix-ui/react-label';
import { css } from '@playmr/styled-system/css';

type BaseProps = {
  /**
   * Component content
   */
  children: React.ReactNode
}

type LabelPrimitiveProps = React.ComponentProps<typeof LabelPrimitive.Root>

type LabelProps = BaseProps & Omit<LabelPrimitiveProps, keyof BaseProps>

const styles = css({
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
});

const Label = ({
  children,
  ...rest
}: LabelProps) => {
  return <LabelPrimitive.Root className={styles} {...rest}>{children}</LabelPrimitive.Root>
};

export default Label;

Label.propTypes = {
  /**
   * Input that the label belongs to
   */
  htmlFor: PropTypes.string,
  /**
   * Component contents
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}