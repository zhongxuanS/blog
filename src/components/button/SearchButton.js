import React from 'react';

import styles from './SearchButton.module.css';

class SearchButton extends React.Component {
  render() {
    const { searchButtonText, className } = this.props;
    return (
      <button
        className={`${styles.searchBtn} ${className}`}
        type="button">{searchButtonText}
      </button>
    );
  }
}

export default SearchButton;