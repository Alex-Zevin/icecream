import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { products } from '../../mock';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

import styles from './DetailPage.module.css'

export const DetailPage = () => {
  const {prodId} = useParams();

  const [count, setCount] = useState(1);
  const user = JSON.parse(localStorage.getItem('user'))

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


  const handleAddIce = () => {
    const products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
    const findProduct = products.find((item) => item?.id === prodId)
    if (findProduct) {
      const updatedProducts = products.map((currentIseCream) => {
        if (currentIseCream.id === prodId) {
          const newCount = currentIseCream.count + count
          if (newCount < 4) {
            return {
              ...currentIseCream,
              count: newCount
            }
          } else {
            console.log('error')
            return currentIseCream
          }
        } else {
          return currentIseCream
        }
      })
      localStorage.setItem('products', JSON.stringify(updatedProducts))
    } else {
      const countProduct = {...product, count}
      localStorage.setItem('products', JSON.stringify([...products, countProduct]))
    }
  }

  return <>
    <Breadcrumbs pageName="product card"/>
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
          <button
            className={styles.to_cart1}
            onClick={handleAddIce}>
            <span className={styles.cart}>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </>
}