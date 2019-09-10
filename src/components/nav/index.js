import React from 'react';
import { NavLink } from 'react-router-dom';
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
                  <li><NavLink id="test" activeClassName={styles.activeLink} exact to="/">首页</NavLink></li>
                  <li><NavLink activeClassName={styles.activeLink} exact to="/diary">说说</NavLink></li>
                  <li><NavLink activeClassName={styles.activeLink} exact to="/todo">Todo</NavLink></li>
                  <li><NavLink activeClassName={styles.activeLink} exact to="/tools">工具</NavLink></li>
                  <li><NavLink activeClassName={styles.activeLink} exact to="/timeLine">时间轴</NavLink></li>
                  <li><NavLink activeClassName={styles.activeLink} exact to="/about">关于</NavLink></li>
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