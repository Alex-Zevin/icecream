import React, { useState } from 'react';

import styles from './RegisterModal.module.css';

const RegisterModal = ({visible, setVisible, onClick}) => {
  const [form, setForm] = useState({
    name: '',
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
          <h1 className={styles.modal_h}>Create an account</h1>
          <p className={styles.modal_p}>Name</p>
          <input
            className={styles.modal_input}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder='Your name'
          />
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
          <button className={styles.modal_btn}>Register</button>
          <div className={styles.modal_footer}>
            <p className={styles.modal_footer_first_p}>Do you already have an account?</p>
            <p
              className={styles.modal_footer_last_p}
              onClick={onClick}
            >
              Sing in
            </p>
        </div>
        </div>
      </div>
    </div>

  );
};
export default RegisterModal




