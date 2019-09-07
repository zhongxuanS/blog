import React from 'react';

import styles from './Archive.module.css';

const ArchiveItem = ({ href, month, count }) => {
  return (
    <li className={styles.archiveItem}>
      <a href={href}>{month}</a>
      (<span>{count}</span>)
  </li>
  );
}

class Archive extends React.Component {
  render() {
    const { archiveList } = this.props;
    const ArchiveItemList = !archiveList ? null :
      archiveList.map(item => {
        return (
          <ArchiveItem
            key={item.id}
            href={item.href}
            month={item.month}
            count={item.count}
          />
        );
      });

    return (
      <ul className={styles.archiveList}>
        {ArchiveItemList}
      </ul>
    );
  }
}

export default Archive;