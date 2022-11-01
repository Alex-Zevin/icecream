import React from 'react';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import BasketPrice from '../BasketPrice/BasketPrice';
import BasketProducts from '../BasketProducts/BasketProducts';

import styles from './Basket.module.css'

export const Basket = () => {
  const basket = JSON.parse(localStorage.getItem('basket'))
  const allPrice = basket.products.reduce((result, { price, count}) => result + price * count, 0)

  return (
    <div>
      <Breadcrumbs pageName='Basket' />
      <h1 className={styles.basket_header}>Basket</h1>
      <div className={styles.main_basket}>
        <BasketProducts products={basket.products} />
        <BasketPrice price={allPrice}/>
      </div>
    </div>
  );
};
