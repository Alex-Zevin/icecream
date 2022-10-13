import styles from './DetailPage.module.css'
import {Link, useParams} from "react-router-dom";
import {products} from "../../mock";
import {useState} from "react";

export const DetailPage = () => {
    const {prodId} = useParams();

    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }
    const increment = () => {
        if(count < 3) {
            setCount(count + 1)
        }
    }

    const product = products.find(item => item.id === prodId)

    return <>
        <div className={styles.top_botm}>
            <Link to='/' className={styles.ss}>Main page </Link>
            <span>/Product card</span>
        </div>
        <div className={styles.mid}>
            <div className={styles.left}>
                <img className={styles.imagines} src={product.image} alt="cream4"/>
            </div>
            <div className='right'>
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