import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { Copyright } from '../Copyright';

import styles from './Footer.module.css'

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


