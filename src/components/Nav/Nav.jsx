import { useState } from 'react';

import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';

import styles from './Nav.module.css';
import vector from '../../assets/images/Vector.png';
import people from '../../assets/images/people.png'

export const Nav = () => {
  const [modalActive, setModalActive] = useState(false)
  const [loginActive, setLoginActive] = useState(false)

  const handleClick = () =>{
    setModalActive(prevState => !prevState)
    setLoginActive(prevState => !prevState)
  }

  return <div className={styles.header_nav}>
    <div className={styles.header_nav_action}>
      <img src={people} alt="people"/>
      <span className={styles.header_nav_action_span} onClick={() => setModalActive(prevState => !prevState)}>Sign up </span>/
      <span className={styles.header_nav_action_span}  onClick={() => setLoginActive(prevState => !prevState)}>Sign in</span>
    </div>
    <div className={styles.header_nav_action}>
      <img src={vector} alt="vector"/>
      <span>Cart</span>
    </div>
    {modalActive && <RegisterModal onClick={handleClick} visible={modalActive} setVisible={setModalActive}/>}
    {loginActive && <LoginModal onClick={handleClick} visible={loginActive} setVisible={setLoginActive}/>}
  </div>
}