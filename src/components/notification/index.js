import React from 'react';
import styles from './notification.module.css'

const Notification = ({ category, link, title }) => {
  return (
    <div className={styles.notification}>
      <span>{category}</span>：
      <a href={link}>{title}</a>
    </div>
  );
}

export default Notification;