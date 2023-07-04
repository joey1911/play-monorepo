import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@playmr/styled-system/css';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Add additional className values
   */
  className?: string,
  /**
   * Component content
   */
  children: React.ReactNode
}

const styles = css({
  boxSizing: 'border-box'
});

const Box = ({
  className,
  children,
  ...rest
}: BoxProps) => {
  const combinedClasses = cx(styles, className);

  return (
    <div className={combinedClasses} {...rest}>
      {children}
    </div>
  )
};

export default Box;

Box.propTypes = {
  /**
   * Add additional className values
   */
  className: PropTypes.string,
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}