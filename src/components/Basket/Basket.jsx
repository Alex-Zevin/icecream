import React from 'react';
import styles from './Basket.module.css'
import { Link } from 'react-router-dom';
import ice from '../../assets/images/iceBasket.png'
import close from '../../assets/images/close.png'
// Breadcrumbs
export const Basket = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.basket_top}>
          <Link to="/" className={styles.basket_link}>Main page /</Link>
          <span className={styles.basket_basket}>Basket</span>
        </div>
        <h1 className={styles.basket_header}>Basket</h1>
        <div className={styles.main_basket}>
          <div className={styles.basket_left}>
            <div className={styles.main_first_basket}>
              <div className={styles.ice}>
                <img src={ice} alt="ice"/>
              </div>
              <div className={styles.basket_info}>
                <p className={styles.basket_name}>Snow Tender Ice Cream</p>
                <p className={styles.basket_amount}>1 pcs.</p>
              </div>
              <div className={styles.basket_left_third}>
                <p className={styles.basket_price}>$243.00</p>
                <img className={styles.basket_close} src={close} alt="close"/>
              </div>
            </div>
            <div className={styles.main_first_basket}>
              <div className={styles.ice}>
                <img src={ice} alt="ice"/>
              </div>
              <div className={styles.basket_info}>
                <p className={styles.basket_name}>Snow Tender Ice Cream</p>
                <p className={styles.basket_amount}>1 pcs.</p>
              </div>
              <div className={styles.basket_left_third}>
                <p className={styles.basket_price}>$243.00</p>
                <img className={styles.basket_close} src={close} alt="close"/>
              </div>
            </div>
            <div className={styles.main_first_basket}>
              <div className={styles.ice}>
                <img src={ice} alt="ice"/>
              </div>
              <div className={styles.basket_info}>
                <p className={styles.basket_name}>Snow Tender Ice Cream</p>
                <p className={styles.basket_amount}>1 pcs.</p>
              </div>
              <div className={styles.basket_left_third}>
                <p className={styles.basket_price}>$243.00</p>
                <img className={styles.basket_close} src={close} alt="close"/>
              </div>
            </div>
          </div>
          <div className={styles.basket_right}>
            <div className={styles.basket_total_amount}>
              <p className={styles.basket_total_first}>Sub total:</p>
              <p className={styles.basket_total_last}>$3,629.00</p>
            </div>
            <button className={styles.basket_btn}>
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
