import React from 'react';
import './index.css';
import '../../App.css';
import avatar from './images/avatar.jpg';

class Header extends React.Component {
  render() {
    const blogInfo = this.props.blogInfo;
    return (
      <header>
        <div className="header-content">
          <a className="header-avatar" href="/" title={blogInfo.blogTitle}>
            <img className="avatar" src={avatar} alt="avatar"></img>
          </a>
        </div>
        <div className="branding">
          <h1>{blogInfo.blogBranding}</h1>
        </div>
      </header>
    );
  }
}

export default Header;