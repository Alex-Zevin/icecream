import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

import { products } from '../../mock';
import styles from './DetailPage.module.css'

export const DetailPage = () => {
  const {prodId} = useParams();

  const [count, setCount] = useState(1)

  const product = products.find(item => item.id === prodId)

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const increment = () => {
    if (count < 3) {
      setCount(count + 1)
    }
  }

  return <>
    <Breadcrumbs pageName='product card' />
    <div className={styles.mid}>
      <div className={styles.left}>
        <img className={styles.imagines} src={product.image} alt="cream4"/>
      </div>
      <div className="right">
        <div className={styles.promoKod}>SKU: {product.sku}</div>
        <div className={styles.promo_1}>{product.iceName}</div>
        <div className={styles.promo_2}>{product.header}:</div>
        <div className={styles.promo_3}>
          {product.texst}
        </div>
        <div className={styles.button_1}>
          <div className={styles.money}>{product.price}</div>
          <div className={styles.amount}>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>
        </div>
        <div className={styles.to_cart}>
          <button className={styles.to_cart1}><span className={styles.cart}>add to cart</span></button>
        </div>
      </div>
    </div>
  </>
}