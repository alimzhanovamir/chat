import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './buttons.scss';

interface ButtonIterface {
    type: string,
    to: string,
    children: string | ReactNode
};

const cssPrefix = 'button';

export const Button = ({ type, children, ...props }: ButtonIterface) => {
  switch (type) {
    case 'link':
      return <Link className={cssPrefix} { ...props }>{ children }</Link>
      break;

    default:
      return <button className={cssPrefix} { ...props }>{ children }</button>
      break;
  }
};

Button.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  to: undefined,
  children: undefined,
  onClick: () => {}
};