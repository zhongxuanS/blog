import React from 'react';
import './Header.css';
import '../../App.css';
import avatar from './images/avatar.jpg';

class Header extends React.Component {
  render() {
    const blogInfo = this.props.blogInfo;
    return (
      <header>
        <div class="header-content">
          <a class="header-avatar" href="/" title={blogInfo.blogTitle}>
            <img class="avatar" src={avatar} alt="avatar"></img>
          </a>
        </div>
        <div class="branding">
          <h1>{blogInfo.blogBranding}</h1>
        </div>
      </header>
    );
  }
}

export default Header