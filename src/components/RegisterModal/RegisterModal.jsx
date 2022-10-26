import React, { useState } from 'react';

import styles from './RegisterModal.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
}

const RegisterModal = ({visible, setVisible, onClick}) => {
  const [form, setForm] = useState(initialValues)
  const [error, setError] = useState('')

  const formInput = [
    {
      label: 'Name',
      placeholder: 'Your name',
      name: 'name',
      type: 'text'
    },
    {
      label: 'Email',
      placeholder: 'Your email',
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
    const newUser = {
      ...form,
      id: Date.now()
    }

    const user = users.find(user => user.email === newUser.email)
    if (user) {
      setError('User is exist')
    } else {
      setError('')
      localStorage.setItem('users', JSON.stringify([...users, newUser]))
      onClick()
    }
  }
  return (
    <div className={`${styles.modal} ${visible ? styles.modal_active : ''}`} onClick={() => setVisible(false)}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_content_all}>
          <h1 className={styles.modal_h}>Create an account</h1>
          {
            formInput.map(({label, placeholder, name, type}) => (
              <div key={name + new Date}>
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
              )
            )
          }

          {error && <div className={styles.modal_error}>{error}</div>}
          <button onClick={handleSubmit} className={styles.modal_btn}>Register</button>
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




