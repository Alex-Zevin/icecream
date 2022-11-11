import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './RegisterModal.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const RegisterModal = ({visible, setVisible, onClick}) => {
  const [error,] = useState('')

  const formik = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      axios.post('http://localhost:5000/api/auth/register', values)
        .then(() => onClick())
    },
  });

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

  return (
    <div className={`${styles.modal} ${visible ? styles.modal_active : ''}`} onClick={() => setVisible(false)}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_content_all}>
          <h1 className={styles.modal_h}>Create an account</h1>
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
                    onBlur={formik.handleBlur}
                    placeholder={placeholder}
                  />
                  {formik.errors[name] && formik.touched[name] ? (
                    <div className={styles.modal_error}>{formik.errors[name]}</div>
                  ) : null}
                </div>
              )
            )
          }

          {error && <div className={styles.modal_error}>{error}</div>}
          <button onClick={formik.handleSubmit} className={styles.modal_btn}>Register</button>
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




