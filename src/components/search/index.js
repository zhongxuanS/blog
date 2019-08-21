import React from 'react';
import styles from './search.module.css';

import { SearchButton } from '../button';

const SEARCH_RESULT = [{
  id: 1,
  href: 'test1',
  title: 'test1',
  content: 'test1---content'
},
{
  id: 2,
  href: 'test2',
  title: 'test2',
  content: 'test2---content'
},
{
  id: 3,
  href: 'test3',
  title: 'test3',
  content: 'test3---content'
},
{
  id: 4,
  href: 'test4',
  title: 'test4',
  content: 'test4---content'
}
];


const SearchItem = ({ href, title, content }) => {
  return (
    <div className={styles.searchItem}>
      <a href={href} title={title}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
      </a>
    </div>
  );
}

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
          {
            SEARCH_RESULT.map(result => {
              return (<SearchItem
                key={result.id}
                href={result.href}
                title={result.title}
                content={result.content} />);
            })
          }
        </div>
      </div>
    );
  }
}

export default Search;