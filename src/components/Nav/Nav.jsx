import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import LoginContent from './LoginContent/LoginContent';

import styles from './Nav.module.css';
import vector from '../../assets/images/Vector.png';
import people from '../../assets/images/people.png'
import { MyContext } from '../../App';

export const Nav = () => {
  const [modalActive, setModalActive] = useState(false)
  const [loginActive, setLoginActive] = useState(false)

  const {basket, setIsAuth, isAuth} = useContext(MyContext)

  const handleClick = () => {
    setModalActive(prevState => !prevState)
    setLoginActive(prevState => !prevState)
  }
  const logout = () => {
    localStorage.removeItem('user')
    setIsAuth(false)
  }

  return <div className={styles.header_nav}>
    <div className={styles.header_nav_action}>
      <img src={people} alt="people"/>
      {!isAuth ? (
        <>
          <span className={styles.header_nav_action_span}
                onClick={() => setModalActive(prevState => !prevState)}>Sign up </span>/
          <span className={styles.header_nav_action_span}
                onClick={() => setLoginActive(prevState => !prevState)}>Sign in</span>
        </>
      ) : (
        <span className={styles.header_nav_action_span} onClick={logout}>Logout </span>
      )}
    </div>
    <div className={styles.header_nav_action}>
      <Link to="basket">
        <img src={vector} alt="vector"/>
      </Link>
      <Link to="basket">
        {basket?.products?.length ? <div className={styles.header_nav_counter}>{basket.products.length}</div> : null}
        <span className={styles.header_nav_basket}>Cart</span>
      </Link>
    </div>
    {modalActive && <RegisterModal onClick={handleClick} visible={modalActive} setVisible={setModalActive}/>}
    {loginActive &&
      <LoginModal visible={loginActive} setVisible={setLoginActive}>
        <LoginContent onClick={handleClick} setVisible={setLoginActive}/>
      </LoginModal>
    }
  </div>
}
