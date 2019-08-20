import React from 'react';
import PropTypes from "prop-types";

import Styles from './button.module.css';

const Button = ({ className, href, text }) =>
  <a className={`${Styles.button} ${className}`} href={href}>{text}</a>


Button.defaultProps = {
  className: '',
  href: '/',
  text: 'Button'
}

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string
}

export default Button;