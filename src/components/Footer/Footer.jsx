
import styles from './Footer.module.css'
import {Logo} from "../Logo/Logo";
import {Menu} from "../Menu/Menu";
import {Copyright} from "../Copyright/Copyright";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footer_all} container`}>
                <Logo/>
                <Menu/>
            </div>
            <Copyright/>
        </footer>
    )
}


