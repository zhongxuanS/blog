import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import Styles from './button.module.css';

const Button = ({ className, href, text }) =>
  <Link className={`${Styles.button} ${className}`} to={href}>{text}</Link>


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