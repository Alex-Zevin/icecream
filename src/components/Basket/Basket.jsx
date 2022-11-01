import React from 'react';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import BasketPrice from '../BasketPrice/BasketPrice';
import BasketProducts from '../BasketProducts/BasketProducts';

import styles from './Basket.module.css'

export const Basket = () => {
  const basketS = JSON.parse(localStorage.getItem('basket'))
  console.log(basketS)
  let summa = 0;
  basketS.products.forEach(({price,count }) =>{
    summa += price * count
  })

  return (
    <div>
      <Breadcrumbs pageName='Basket' />
      <h1 className={styles.basket_header}>Basket</h1>
      <div className={styles.main_basket}>
        <BasketProducts productList={basketS} />
        <BasketPrice summa={summa}/>
      </div>
    </div>
  );
};
