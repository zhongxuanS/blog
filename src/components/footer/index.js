import React from 'react';
import styles from './Footer.module.css';

class Footer extends React.Component {
  render() {
    return (
      <div className={`${styles.footer} containter`}>
        <div className="row">
          <div className="col-sm-12">
            <span>Copyright © 2019</span>|<span>由reactjs强力驱动</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;