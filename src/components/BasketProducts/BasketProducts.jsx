import React from 'react';

import styles from '../Basket/Basket.module.css';
import close from '../../assets/images/close.png';
import { products } from '../../mock';

const BasketProducts = () => {
  return (
    <div className={styles.basket_left}>
      {products.map(({id, name, price, image, iceName}) => (
        <div key={id} className={styles.main_first_basket}>
          <div className={styles.ice}>
            <img className={styles.basket_ice_new} src={image} alt="ice"/>
          </div>
          <div className={styles.basket_info}>
            <p className={styles.basket_name}>{name}</p>
            <p className={styles.basket_amount}>{`${id} шт`}</p>
          </div>
          <div className={styles.basket_left_third}>
            <p className={styles.basket_price}>{price}</p>
            <img className={styles.basket_close} src={close} alt="close"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BasketProducts;