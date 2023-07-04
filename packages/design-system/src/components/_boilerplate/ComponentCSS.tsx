import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@playmr/styled-system/css';

interface GenericProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Component content
   */
  children: React.ReactNode
}

const styles = css({
});

const Generic = ({
  children,
  ...rest
}: GenericProps) => {
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
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