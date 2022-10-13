import cream4 from "../../assets/images/cream4.png";
import styles from './DetailPage.module.css'

export const DetailPage = () => {
    return <>
        <div className={styles.top_botm}>
            <a href="#" className={styles.ss}>Main page </a>
            <span>/Product card</span>
        </div>
        <div className={styles.mid}>
            <div className={styles.left }>
                <img className={styles.imagines} src={cream4} alt="cream4"/>
            </div>
            <div className='right'>
                <div className={styles.promoKod}>SKU: BXD100BLK</div>
                <div className={styles.promo_1}>Snow Tender Ice Cream</div>
                <div className={styles.promo_2}>Description:</div>
                <div className={styles.promo_3}>Chocolate ice cream has a bright, rich and refreshing taste of the
                    ingredient it contains.
                    <div>Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the
                        ingredients instantly and gives the ice cream an amazingly delicate texture, all the
                        flavors,
                        vitamins and nutrients are preserved by 99%.</div>
                    <br/>

                    <div>Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients
                        instantly and gives the ice cream an amazingly delicate texture,
                        preserving all the flavors, vitamins and nutrients by 99%.
                    </div>
                </div>
                <div className={styles.button_1}>
                    <div className={styles.money}>$243.00</div>
                    <div className={styles.amount}>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
                <div className={styles.to_cart}>
                    <button className={styles.to_cart1}><span className={styles.cart}>add to cart</span></button>
                </div>
            </div>
        </div>
    </>
}