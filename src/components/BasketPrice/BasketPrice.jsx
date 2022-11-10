import React, { useContext, useState } from 'react';

import LoginModal from '../LoginModal/LoginModal';
import { Success } from '../../icons';

import styles from '../Basket/Basket.module.css';
import { MyContext } from '../../App';

const BasketPrice = ({price, disabled = false}) => {
  const [open, setOpen] = useState(false)
  const {setBasket} = useContext(MyContext)

  const deleteBasket = () => {
    localStorage.removeItem('basket')
    setBasket('')
    setOpen(true)
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