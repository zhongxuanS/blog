import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './Nav.module.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className={styles.mainNavigation}>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className={styles.navbarHeader}>
                <FontAwesomeIcon className={styles.hamburgerBtn} size='2x' icon={faBars} />
                <a className="slogan" href="/">多看多想多写多思考</a>
              </div>
              <div className={`${styles.navbarCollapse} ${styles.navbar}`} id="main-menu">
                <ul className={styles.menu}>
                  <li><Link id="test" to="/">首页</Link></li>
                  <li><Link to="/diary/">说说</Link></li>
                  <li><Link to="/todo/">Todo</Link></li>
                  <li><Link to="/tools/">工具</Link></li>
                  <li><Link to="/timeLine/">时间轴</Link></li>
                  <li><Link to="/about/">关于</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;