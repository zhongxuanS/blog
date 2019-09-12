import React from 'react';
import axios from 'axios';
import _ from 'underscore';

import styles from './search.module.css';

import { SearchButton } from '../button';

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
    this.ajaxSearchPost = _.debounce(this.ajaxSearchPost.bind(this), 500)
  }

  ajaxSearchPost(searchKey) {
    axios.post('/searchPost', {
      keyWord: searchKey
    }).then(({ data }) => {
      if (data.isSuccess) {
        const responseData = data.data;
        const postList = responseData.postList;
        this.setState({
          searchResult: postList,
          isBeginSearch: true
        });
      } else {
        console.log(data.errorCode);
      }
    }).catch(error => {
      console.log(error);
    });
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
      this.setState({
        searchKey: searchKey,
        searchResult: null,
        isBeginSearch: false
      });
      this.ajaxSearchPost(searchKey);
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
                  href={result.postPath}
                  title={result.title}
                  content={result.brief} />);
              })
            }
          </div> : null
        }
      </div>
    );
  }
}

export default Search;
