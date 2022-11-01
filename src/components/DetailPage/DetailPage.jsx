import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ok from '../../assets/images/ok.png'

import { products } from '../../mock';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

import styles from './DetailPage.module.css'

export const DetailPage = () => {
  const {prodId} = useParams();

  const [count, setCount] = useState(1);
  const user = JSON.parse(localStorage.getItem('user'))
  const [showCheckCard, setShowCheckCard] = useState(false)
  const [error, setError] = useState('')
  const product = products.find(item => item.id === prodId)
  const basket = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : null

  console.log(showCheckCard)
  console.log(error)

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

  const basketExist = () => basket.products.length < 3 ? basketProductsAvailable() : basketProductNotAvailable()

  const basketEmpty = () => {
    const newBasket = {userId: user.id, products: [{...product, count}]}
    localStorage.setItem('basket', JSON.stringify(newBasket))
    setShowCheckCard(true)
  }

  const basketProductsAvailable = () => {
    const findProduct = basket.products.find((item) => item?.id === prodId)
    findProduct ? basketProductsExist() : basketProductsNotExist()
  }

  const basketProductsNotExist = () => {
    const updatedBasket = {...basket, products: [...basket.products, {...product, count}]}
    localStorage.setItem('basket', JSON.stringify(updatedBasket))
    setShowCheckCard(true)
  }

  const basketProductsExist = () => {
    let error = ''
    let showSuccess = true
    const updatedProducts = basket.products.map((currentIseCream) => {
      if (currentIseCream.id === prodId) {
        const newCount = currentIseCream.count + count
        if (newCount < 4) {
          return {
            ...currentIseCream,
            count: newCount
          }
        } else {
          showSuccess = false
          error = 'Превышено количество продуктов'
          return currentIseCream
        }
      } else {
        return currentIseCream
      }
    })
    const updatedBasket = {...basket, products: updatedProducts}
    localStorage.setItem('basket', JSON.stringify(updatedBasket))
    setShowCheckCard(showSuccess)
    error && setError(error)
  }

  const basketProductNotAvailable = () => {
    setError('Количество продукта ограниченно')
    setShowCheckCard(false)
  }

  const handleAddIce = () => basket ? basketExist() : basketEmpty()

  return <>
    <Breadcrumbs pageName="product card"/>
    <div className={styles.mid}>
      <div className={styles.left}>
        <img className={styles.imagines} src={product.image} alt="cream4"/>
      </div>
      <div className="right">
        <div className={styles.promoKod}>SKU: {product.sku}</div>
        <div className={styles.promo_1}>{product.name}</div>
        <div className={styles.promo_2}>{product.header}:</div>
        <div className={styles.promo_3}>
          {product.texst}
        </div>
        <div className={styles.button_1}>
          <div className={styles.money}>{`$${product.price}.00`}</div>
          <div className={styles.amount}>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>
        </div>
        <div className={styles.to_cart}>
          {error && <div className={styles.error}>
            <span>{error}</span>
          </div>}
          <div>
            <button
              className={styles.to_cart1}
              onClick={handleAddIce}>
              <span className={styles.cart}>Add to cart</span>
            </button>
          </div>
          {showCheckCard && <div className={styles.right_cart}>
            <img src={ok} alt="ok"/>
            <span >Added to cart</span>
          </div>}
        </div>
      </div>
    </div>
  </>
}