import React from 'react';
import styles from './submitButton.module.css';
export default class SubmitButton extends React.Component {
  render() {
    const { text, onClick, className } = this.props;
    return (
      <div className={`${className} ${styles.button}`} onClick={onClick}>{text}</div>
    );
  }
}