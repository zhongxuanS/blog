import React from 'react';
import styles from './Widget.module.css';

class Widget extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={styles.widget}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    );
  }
}

export default Widget;