import React, { useContext, useState } from 'react';

import { MyContext } from '../../../App';
import { useFormik } from 'formik';

import styles from '../../LoginModal/LoginModal.module.css';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const LoginContent = ({ onClick, setVisible }) => {
  const [error, setError] = useState('')

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []

      const user = users.find(user => user.email === values.email)
      if (!user) {
        setError('User is not exist')
      } else {
        if (user.password !== values.password) {
          setError('Wrong password')
        } else {
          localStorage.setItem('user', JSON.stringify(user))
          setVisible(false)
          setIsAuth(true)
        }
      }
    }
  })

  const {setIsAuth} = useContext(MyContext)

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

  return (
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
              value={formik.values[name]}
              onChange={formik.handleChange}
              placeholder={placeholder}
            />
            {formik.errors[name] && formik.touched[name] ? (
              <div className={styles.modal_error}>{formik.errors[name]}</div>
            ) : null}
          </div>
        ))
      }
      {error && <div className={styles.modal_error}>{error}</div>}
      <button onClick={formik.handleSubmit} className={styles.modal_btn}>Sing in</button>
      <div className={styles.modal_footer}>
        <p className={styles.modal_footer_first_p}>No account? </p>
        <p onClick={onClick} className={styles.modal_footer_last_p}>Create one</p>
      </div>
    </div>
  );
};

export default LoginContent;