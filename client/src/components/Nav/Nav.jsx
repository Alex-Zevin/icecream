import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import LoginContent from './LoginContent/LoginContent';

import { MyContext } from '../../App';
import styles from './Nav.module.css';
import vector from '../../assets/images/Vector.png';
import people from '../../assets/images/people.png'

export const Nav = () => {
  const [modalActive, setModalActive] = useState(false)
  const [nav, setNav] = useState(false)

  const {basket, setIsAuth, isAuth, loginActive, setLoginActive, setBasket} = useContext(MyContext)
  const handleClick = () => {
    setModalActive(prevState => !prevState)
    setLoginActive(prevState => !prevState)
  }

  const logIn = (logIn) => {
    logIn ? setLoginActive(prevState => !prevState) : setModalActive(prevState => !prevState)
    setNav(false)
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setIsAuth(false)
    setBasket(null)
  }

  return <>
    <div className={styles.header_nav}>
      <div className={nav ? [styles.header_new, styles.active].join(' ') : styles.header_new}>
        <div className={styles.header_nav1}>
          <img src={people} alt="people"/>
          {!isAuth ? (
            <>
          <span className={styles.header_nav_action_span}
                onClick={() => logIn(false)}>Sign up </span>/
              <span className={styles.header_nav_action_span}
                    onClick={() => logIn(true)}>Sign in</span>
            </>
          ) : (
            <span className={styles.header_nav_action_span} onClick={logout}>Logout </span>
          )}
        </div>
        <div className={styles.header_nav_action}>
          <Link to={isAuth ? 'basket' : '/'} onClick={() => setNav(false)}>
            <img src={vector} alt="vector"/>
          </Link>
          <Link className={styles.header_link} to={isAuth ? 'basket' : '/' } onClick={() => setNav(false)}>
            {basket?.products?.length ?
              <div className={styles.header_nav_counter}>{basket.products.length}</div> : null}
            <span className={styles.header_nav_basket}>Cart</span>
          </Link>
        </div>
      </div>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
      </div>
      {modalActive && <RegisterModal onClick={handleClick} visible={modalActive} setVisible={setModalActive}/>}
      {loginActive &&
        <LoginModal visible={loginActive} setVisible={setLoginActive}>
          <LoginContent onClick={handleClick} setVisible={setLoginActive}/>
        </LoginModal>
      }
    </div>
  </>
}






