import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Success } from '../../icons';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

import styles from './DetailPage.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { createBasket, setLoginModalActive, updateBasket } from '../../redux/actions';

export const DetailPage = () => {
  const dispatch = useDispatch()
  const {prodId} = useParams();

  const [count, setCount] = useState(1);
  const [showCheckCard, setShowCheckCard] = useState(false)
  const [error, setError] = useState('')
  const [product, setProduct] = useState(null)

  const basket = useSelector(state => state.basket)
  const userId = useSelector(state => state.userId)
  const token = useSelector(state => state.token)
  const isAuth = useSelector(state => state.isAuth)
  const loginActive = useSelector(state => state.loginActive)

  useEffect(() => {
    axios.get(`http://localhost:5000/api/product/${prodId}`, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => setProduct(response.data))
  }, [])

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

  const basketExist = () => basket.products.length < 4 ? basketProductsAvailable() : basketProductNotAvailable()
  const basketEmpty = () => {

    const newBasket = {userId, products: [{...product, count}]}
    axios.post('http://localhost:5000/api/basket/', newBasket, {
        headers: {
          Authorization: token
        }
      }
    )
      .then((response) => {
        dispatch(createBasket(response.data))
        setShowCheckCard(true)
      })
  }

  const basketProductsAvailable = () => {
    const findProduct = basket.products.find((item) => item?._id === prodId)
    findProduct ? basketProductsExist() : basketProductsNotExist()
  }

  const basketProductsNotExist = () => {
    if (basket?.products?.length < 3) {
      const updatedBasket = {products: [...basket.products, {...product, count}]}
      axios.patch(`http://localhost:5000/api/basket/${userId}`, updatedBasket, {
          headers: {
            Authorization: token
          }
        }
      )
        .then((response) => {
          dispatch(updateBasket(response.data));
          setShowCheckCard(true)
        })
    } else {
      basketProductNotAvailable()
    }
  }

  const basketProductsExist = () => {
    let error = ''
    let showSuccess = true
    const updatedProducts = basket.products.map((currentIseCream) => {
      if (currentIseCream._id === prodId) {
        const newCount = currentIseCream.count + count
        if (newCount < 4) {
          return {
            ...currentIseCream,
            count: newCount
          }
        } else {
          showSuccess = false
          error = 'Превышено количество продуктов'
          setShowCheckCard(false)
          return currentIseCream
        }
      } else {
        error = ''
        return currentIseCream
      }
    })
    const updatedBasket = {...basket, products: updatedProducts}
    if (!error) {
      axios.patch(`http://localhost:5000/api/basket/${userId}`, updatedBasket, {
          headers: {
            Authorization: token
          }
        }
      )
        .then((response) => {
          dispatch(updateBasket(response.data))
          setShowCheckCard(showSuccess)
          setError(error)
        })
    } else {
      setError(error)
    }
  }

  const basketProductNotAvailable = () => {
    setError('Количество продукта ограниченно')
    setShowCheckCard(false)
  }

  const handleAddIce = () => {
    if (!isAuth) {
      dispatch(setLoginModalActive(!loginActive))
    } else {
      basket ? basketExist() : basketEmpty()
    }
  }

  if(!product) {
    return null
  }

  return <>
    <Breadcrumbs pageName="product card"/>
    <div className={styles.mid}>
      <div className={styles.left}>
        <img className={styles.imagines} src={`http://localhost:5000/${product.imageSrc}`} alt="cream4"/>
      </div>
      <div className="right">
        <div className={styles.promoKod}>SKU: {product.sku}</div>
        <div className={styles.promo_1}>{product.name}</div>
        <div className={styles.promo_2}>{product.header}:</div>
        <div className={styles.promo_3}>
          {product.text}
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
            <Success/>
            <span>Added to cart</span>
          </div>}
        </div>
      </div>
    </div>
  </>
}