import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Social.module.css'

const SocialItem = ({ href, fontAweIconPrefix, fontAweIconName }) => {
  return (
    <a href={href} className={styles.socialItem}>
      <FontAwesomeIcon icon={[fontAweIconPrefix, fontAweIconName]} size='2x' color="white" />
    </a>
  );
}

class Social extends React.Component {

  render() {
    const { socialList } = this.props;

    const socialItems = socialList && socialList.map(item => {
      return <SocialItem
        key={item.id}
        href={item.href}
        fontAweIconPrefix={item.fontAweIconPrefix}
        fontAweIconName={item.fontAweIconName} />;
    });


    return (
      <div className={styles.social}>
        {socialItems}
      </div>
    );
  }
}

export default Social;