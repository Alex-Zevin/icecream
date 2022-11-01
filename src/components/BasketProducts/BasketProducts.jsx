import React from 'react';

import styles from '../Basket/Basket.module.css';
import close from '../../assets/images/close.png';

const BasketProducts = ({ productList }) => {

  return (
    <div className={styles.basket_left}>
      {productList?.products?.map(({id, name, price, image, iceName, count}) => (
        <div key={id} className={styles.main_first_basket}>
          <div className={styles.ice}>
            <img className={styles.basket_ice_new} src={image} alt="ice"/>
          </div>
          <div className={styles.basket_info}>
            <p className={styles.basket_name}>{name}</p>
            <p className={styles.basket_amount}>{`${count} шт`}</p>
          </div>
          <div className={styles.basket_left_third}>
            <p className={styles.basket_price}>${(price.replace(/[\D+]./g,"")) * count}.00</p>
            <img className={styles.basket_close} src={close} alt="close"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BasketProducts;