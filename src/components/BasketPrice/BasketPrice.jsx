import React from 'react';

import styles from '../Basket/Basket.module.css';

const BasketPrice = ({summa}) => {
  return (
    <div>
      <div className={styles.basket_right}>
        <div className={styles.basket_total_amount}>
          <p className={styles.basket_total_first}>Sub total:</p>
          <p className={styles.basket_total_last}>{summa}</p>
        </div>
        <button className={styles.basket_btn}>
          Check out
        </button>
      </div>
    </div>
  );
};

export default BasketPrice;