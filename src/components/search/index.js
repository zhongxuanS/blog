import React from 'react';
import styles from './search.module.css';

import { SearchButton } from '../button';

class Search extends React.Component {
  render() {
    const { placeholder, searchButtonText } = this.props;

    return (
      <div className={styles.searchForm}>
        <div className={`${styles.mask} ${styles.hide}`}></div>
        <div className={styles.searchArea}>
          <input className={styles.searchKey} type="search" autoComplete="off" placeholder={placeholder} />
          <SearchButton className={styles.searchButton} searchButtonText={searchButtonText}></SearchButton>
        </div>

        <div className={`${styles.resultWrapper}`}>
          <div className={`${styles.searchResult}  ${styles.hide}`}></div>
        </div>
      </div>
    );
  }
}

export default Search;