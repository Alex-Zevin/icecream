import { Link } from 'react-router-dom';

import styles from './MainPage.module.css'
import heart from '../../assets/images/heart.png'
import { products } from '../../mock';

export const MainPage = () => {

  return <>
    <div className={styles.ice_cream}>
      <span>i</span>
      <img src={heart} alt="heart"/>
      <span>ice cream</span>
    </div>
    <div className={`${styles.main_img} container`}>
      {products.map((prod) => {
        return <Link key={prod.id} to={`detail/${prod.id}`}>
          <div className={styles.block}>
            <div className={styles.top}>
              <img src={prod.image} alt="cream1"/>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottom_list}>
                <div className={styles.li1}>{prod.name}</div>
                <div className={styles.li2}>{prod.price}</div>
              </div>
            </div>
          </div>
        </Link>
      })}
    </div>
  </>
}
