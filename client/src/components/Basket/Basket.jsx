import React, { useContext } from 'react';
import axios from 'axios';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import BasketPrice from '../BasketPrice/BasketPrice';
import BasketProducts from '../BasketProducts/BasketProducts';

import { MyContext } from '../../App';
import styles from './Basket.module.css'

export const Basket = () => {
  const { basket, setBasket, userId, token } = useContext(MyContext)
  const allPrice = basket?.products?.reduce((result, { price, count}) => result + price * count, 0) || 0

  const basketDelete = (id) => {
    const productsFilter = basket?.products?.filter((product)=> id !== product._id)
    setBasket((prevState) => {
      const filteredProducts = {
        ...prevState,
        products: productsFilter
      }
      axios.patch(`http://localhost:5000/api/basket/${userId}`, filteredProducts, {
          headers: {
            Authorization: token
          }
        }
      )
        .then(() => {
          setBasket(filteredProducts)
          return filteredProducts
        })
    })
  }

  return (
    <div>
      <Breadcrumbs pageName='Basket' />
      <h1 className={styles.basket_header}>Basket</h1>
      <div className={styles.main_basket}>
        <BasketProducts products={basket?.products} onClick={basketDelete} />
        <BasketPrice disabled={!basket?.products || !basket?.products?.length} price={allPrice}/>
      </div>
    </div>
  );
};
