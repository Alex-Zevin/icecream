import { Logo } from '../Logo';
import { Nav } from '../Nav';

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header_all} container`}>
        <Logo/>
        <Nav/>
      </div>
    </header>
  )
}