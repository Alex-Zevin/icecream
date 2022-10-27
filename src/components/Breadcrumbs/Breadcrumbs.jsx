import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Bradcrumbs.module.css'

const Breadcrumbs = ({pageName}) => {
  return (
    <div>
      <div className={styles.basket_top}>
        <Link to="/" className={styles.basket_link}>Main page /</Link>
        <span className={styles.basket_basket}>{pageName}</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;