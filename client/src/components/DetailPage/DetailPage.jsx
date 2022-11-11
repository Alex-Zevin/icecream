import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Success } from '../../icons';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

import styles from './DetailPage.module.css'
import { MyContext } from '../../App';

export const DetailPage = () => {
  const {prodId} = useParams();
  const {basket, setBasket, userId, token, isAuth, setLoginActive} = useContext(MyContext)
  const [count, setCount] = useState(1);
  const [showCheckCard, setShowCheckCard] = useState(false)
  const [error, setError] = useState('')
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/product/${prodId}`, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => setProducts(response.data))
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

  const basketExist = () => basket.products.length < 3 ? basketProductsAvailable() : basketProductNotAvailable()

  const basketEmpty = () => {
    const newBasket = {userId, products: [{...products, count}]}
    axios.post('http://localhost:5000/api/basket/', newBasket, {
        headers: {
          Authorization: token
        }
      }
    )
      .then(() => {
        setBasket(newBasket)
        setShowCheckCard(true)
      })
  }

  const basketProductsAvailable = () => {
    const findProduct = basket.products.find((item) => item?._id === prodId)
    findProduct ? basketProductsExist() : basketProductsNotExist()
  }

  const basketProductsNotExist = () => {
    const updatedBasket = {...basket, products: [...basket.products, {...products, count}]}

    axios.patch(`http://localhost:5000/api/basket/${userId}`, updatedBasket, {
        headers: {
          Authorization: token
        }
      }
    )
      .then(() => {
        setBasket(updatedBasket)
        setShowCheckCard(true)
      })
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
          return currentIseCream
        }
      } else {
        error = ''
        return currentIseCream
      }
    })
    const updatedBasket = {...basket, products: updatedProducts}
    if(!error) {
      axios.patch(`http://localhost:5000/api/basket/${userId}`, updatedBasket, {
          headers: {
            Authorization: token
          }
        }
      )
        .then(() => {
          setShowCheckCard(showSuccess)
          setBasket(updatedBasket)
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
    if(!isAuth) {
      setLoginActive(true)
    } else {
      basket ? basketExist() : basketEmpty()
    }
  }

  return <>
    <Breadcrumbs pageName="product card"/>
    <div className={styles.mid}>
      <div className={styles.left}>
        <img className={styles.imagines} src={`http://localhost:5000/${products.imageSrc}`} alt="cream4"/>
      </div>
      <div className="right">
        <div className={styles.promoKod}>SKU: {products.sku}</div>
        <div className={styles.promo_1}>{products.name}</div>
        <div className={styles.promo_2}>{products.header}:</div>
        <div className={styles.promo_3}>
          {products.texst}
        </div>
        <div className={styles.button_1}>
          <div className={styles.money}>{`$${products.price}.00`}</div>
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