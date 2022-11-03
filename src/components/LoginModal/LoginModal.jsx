import React from 'react';

import styles from './LoginModal.module.css';

const LoginModal = ({visible, setVisible, children}) => {

  return (
    <div className={`${styles.modal} ${visible ? styles.modal_active : ''}`} onClick={() => setVisible(false)}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default LoginModal
