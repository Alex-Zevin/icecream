import styles from './Header.module.css'
import {Logo} from "../Logo/Logo";
import {Nav} from "../Nav/Nav";

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