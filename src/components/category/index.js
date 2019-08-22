import React from 'react';

import styles from './Category.module.css';

const CategoryItem = ({ href, categoryName, count }) => {
  return (
    <li className={styles.categoryItem}>
      <a href={href}>{categoryName}</a>
      (<span>{count}</span>)
    </li>
  );
}

class Category extends React.Component {
  render() {
    const { categoryList } = this.props;
    const CategoryItemList = !categoryList ? null :
      categoryList.map(item => {
        return (
          <CategoryItem
            key={item.id}
            href={item.href}
            categoryName={item.categoryName}
            count={item.count} />
        );
      });

    return (
      <ul className={styles.categoryList}>
        {CategoryItemList}
      </ul>
    );
  };
}

export default Category;