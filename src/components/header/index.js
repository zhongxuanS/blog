import React from 'react';
import styles from './Header.module.css';
import '../../App.css';
import avatar from './images/avatar.jpg';

class Header extends React.Component {
  render() {
    const blogInfo = this.props.blogInfo;
    return (
      <header>
        <div className={styles.headerContent}>
          <a href="/" title={blogInfo.blogTitle}>
            <img className={styles.avatar} src={avatar} alt="avatar"></img>
          </a>
        </div>
        <div className={styles.branding}>
          <h1>{blogInfo.blogBranding}</h1>
        </div>
      </header>
    );
  }
}

export default Header;