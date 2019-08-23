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

const Mask = ({ isShow, onClick }) => {
  const width = window.innerWidth || (document.body && document.body.clientWidth);
  const height = window.innerHeight || (document.body && document.body.clientHeight);
  return isShow ?
    <div
      className={`${styles.mask}`}
      width={width}
      height={height}
      onClick={onClick}></div>
    : null
};

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKey: '',
      searchResult: null,
      isBeginSearch: false
    };

    this.searchChanged = this.searchChanged.bind(this);
    this.onClickMask = this.onClickMask.bind(this);
  }

  /**
   * 1.显示mask
   * 2.按照输入的关键字过滤结果
   * 3.显示结果
   * @param {*} event 
   */
  searchChanged(event) {
    const searchKey = event.target.value;

    if (searchKey !== '') {
      const searchResult = SEARCH_RESULT.filter((item) => item.title.includes(searchKey) || item.content.includes(searchKey));

      this.setState({
        searchKey: searchKey,
        searchResult: searchResult,
        isBeginSearch: true
      });

      console.log(searchResult);
    } else {
      this.setState({
        searchKey: '',
        searchResult: null,
        isBeginSearch: false
      });
    }
    event.preventDefault();
  }

  onClickMask() {
    this.setState({
      searchKey: '',
      searchResult: null,
      isBeginSearch: false
    });
  }

  render() {
    const { placeholder, searchButtonText } = this.props;

    const { searchKey, searchResult, isBeginSearch } = this.state;

    const hasSearchResult = (searchResult && searchResult.length > 0) ? true : false;

    return (
      <div className={styles.searchForm}>
        <Mask isShow={isBeginSearch && hasSearchResult} onClick={this.onClickMask} />
        <div className={styles.searchArea}>
          <input
            className={styles.searchKey}
            type="search"
            autoComplete="off"
            placeholder={placeholder}
            onChange={this.searchChanged}
            value={searchKey} />

          <SearchButton
            className={styles.searchButton}
            searchButtonText={searchButtonText}>
          </SearchButton>
        </div>

        {
          hasSearchResult ? <div className={`${styles.resultWrapper}`}>
            {
              searchResult.map(result => {
                return (<SearchItem
                  key={result.id}
                  href={result.href}
                  title={result.title}
                  content={result.content} />);
              })
            }
          </div> : null
        }
      </div>
    );
  }
}

export default Search;