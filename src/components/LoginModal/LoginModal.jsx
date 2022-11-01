import React, { useState } from 'react';

import styles from './LoginModal.module.css';

const LoginModal = ({visible, setVisible, onClick}) => {
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const formInput = [
    {
      label: 'Email',
      placeholder: 'Enter your email',
      name: 'email',
      type: 'email'
    },
    {
      label: 'Password',
      placeholder: 'Enter your password',
      name: 'password',
      type: 'password'
    },
  ]

  const handleChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = () => {
    const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []

    const user = users.find(user => user.email === form.email)
    if (!user) {
      setError('User is not exist')
    } else {
      if (user.password !== form.password) {
        setError('Wrong password')
      } else {
        localStorage.setItem('user', JSON.stringify(user))
        setVisible(false)
      }
    }
  }

  return (
    <div className={`${styles.modal} ${visible ? styles.modal_active : ''}`} onClick={() => setVisible(false)}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_content_all}>
          <h1 className={styles.modal_h}>Log in to your account</h1>
          {
            formInput.map(({label, placeholder, name, type}) => (
              <div key={name}>
                <p className={styles.modal_p}>{label}</p>
                <input
                  className={styles.modal_input}
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                />
              </div>
            ))
          }
          {error && <div className={styles.modal_error}>{error}</div>}
          <button onClick={handleSubmit} className={styles.modal_btn}>Sing in</button>
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




