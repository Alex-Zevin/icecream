import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import BasketPrice from '../BasketPrice/BasketPrice';
import BasketProducts from '../BasketProducts/BasketProducts';

import styles from './Basket.module.css'
import { updateBasket } from '../../redux/actions';

export const Basket = () => {
  const dispatch = useDispatch()

  const basket = useSelector(state => state.basket)
  const userId = useSelector(state => state.userId)
  const token = useSelector(state => state.token)

  const allPrice = basket?.products?.reduce((result, {price, count}) => result + price * count, 0) || 0

  const basketDelete = (id) => {
    const productsFilter = basket?.products?.filter((product) => id !== product._id)
    const updatedBasket = {...basket, products: productsFilter}
    axios.patch(`http://localhost:5000/api/basket/${userId}`, updatedBasket, {
        headers: {
          Authorization: token
        }
      }
    )
      .then(() => {
        dispatch(updateBasket(updatedBasket))
      })
  }

  return (
    <div>
      <Breadcrumbs pageName="Basket"/>
      <h1 className={styles.basket_header}>Basket</h1>
      <div className={styles.main_basket}>
        <BasketProducts products={basket?.products} onClick={basketDelete}/>
        <BasketPrice disabled={!basket?.products || !basket?.products?.length} price={allPrice}/>
      </div>
    </div>
  );
};
