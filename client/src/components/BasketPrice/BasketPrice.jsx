import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import LoginModal from '../LoginModal/LoginModal';
import { Success } from '../../icons';

import styles from '../Basket/Basket.module.css';
import {  updateBasket } from '../../redux/actions';

const BasketPrice = ({price, disabled = false}) => {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)

  const userId = useSelector(state => state.userId)
  const token = useSelector(state => state.token)

  const deleteBasket = () => {
    axios.delete(`http://localhost:5000/api/basket/${userId}`, {
        headers: {
          Authorization: token
        }
      }
    )
      .then(() => {
        dispatch(updateBasket(''))
        setOpen(true)
      })
  }

  return (
    <>
      <div className={styles.basket_right}>
        <div className={styles.basket_total_amount}>
          <p className={styles.basket_total_first}>Sub total:</p>
          <p className={styles.basket_total_last}>{`$${price}.00`}</p>
        </div>
        <button disabled={disabled} onClick={deleteBasket} className={styles.basket_btn}>
          Check out
        </button>
      </div>
      <LoginModal visible={open} setVisible={setOpen}>
        <div className={styles.basket_total_messenger}>
          <Success width={200} height={200}/>
          <p className={styles.basket_total_text}>Транзакция прошла успешно</p>
        </div>

      </LoginModal>
    </>
  );
};

export default BasketPrice;