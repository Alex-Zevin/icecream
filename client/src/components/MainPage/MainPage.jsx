import { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import styles from './MainPage.module.css'
import heart from '../../assets/images/heart.png'

export const MainPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/product')
      .then((response) => setProducts(response.data))
  }, [])

  return <>
    <div className={styles.ice_cream}>
      <span>i</span>
      <img src={heart} alt="heart"/>
      <span>ice cream</span>
    </div>
    <div className={`${styles.main_img} container`}>
      {products.map((prod) => {
        return <Link className={styles.link} key={prod._id} to={`detail/${prod._id}`}>
          <div className={styles.block}>
            <div className={styles.top}>
              <img src={`http://localhost:5000/${prod.imageSrc}`} alt="cream1"/>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottom_list}>
                <div className={styles.li1}>{prod.name}</div>
                <div className={styles.li2}>{`$${prod.price}.00`}</div>
              </div>
            </div>
          </div>
        </Link>
      })}
    </div>
  </>
}
