import React, { useState } from 'react';

import styles from './LoginModal.module.css';

const LoginModal = ({visible, setVisible, onClick }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div className={`${styles.modal} ${visible ? styles.modal_active : ''}`} onClick={() => setVisible(false)}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_content_all}>
          <h1 className={styles.modal_h}>Log in to your account</h1>
          <p className={styles.modal_p}>Email</p>
          <input
            className={styles.modal_input}
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder='Your email'
          />
          <p className={styles.modal_p}>Password</p>
          <input
            className={styles.modal_input}
            type="text"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder='Enter your password'
          />
          <button className={styles.modal_btn}>Sing in</button>
          <div className={styles.modal_footer}>
            <p className={styles.modal_footer_first_p}>No account? </p>
            <p onClick={onClick} className={styles.modal_footer_last_p}>Create one</p>
          </div>
        </div>
      </div>
    </div>

  );
};
export default LoginModal




