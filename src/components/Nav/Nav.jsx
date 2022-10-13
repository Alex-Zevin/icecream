import styles from "./Nav.module.css";
import vector from "../../assets/images/Vector.png";


export const Nav = () => {
    return <div className={styles.header_nav}>
        <div className={styles.header_nav_action}>
            <img src={vector} alt="vector"/>
            <span>Sign up / Sign in</span>
        </div>
        <div className={styles.header_nav_action}>
            <img src={vector} alt="vector"/>
            <span>Cart</span>
        </div>
    </div>
}