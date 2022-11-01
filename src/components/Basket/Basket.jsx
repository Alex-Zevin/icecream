import React, { useContext } from 'react';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import BasketPrice from '../BasketPrice/BasketPrice';
import BasketProducts from '../BasketProducts/BasketProducts';

import styles from './Basket.module.css'
import { MyContext } from '../../App';

export const Basket = () => {
  const { basket, setBasket } = useContext(MyContext)
  const allPrice = basket?.products?.reduce((result, { price, count}) => result + price * count, 0)

  const basketDelete = (id) => {
    const productsFilter = basket?.products?.filter((product)=> id !== product.id)
    setBasket((prevState) => {
      const filteredProducts = {
        ...prevState,
        products: productsFilter
      }
      localStorage.setItem('basket', JSON.stringify(filteredProducts))
      setBasket(filteredProducts)
      return filteredProducts
    })
  }

  return (
    <div>
      <Breadcrumbs pageName='Basket' />
      <h1 className={styles.basket_header}>Basket</h1>
      <div className={styles.main_basket}>
        <BasketProducts products={basket?.products} onClick={basketDelete} />
        <BasketPrice price={allPrice}/>
      </div>
    </div>
  );
};
