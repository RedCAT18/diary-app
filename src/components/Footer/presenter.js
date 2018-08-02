import React from 'react';
import styles from './footer.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p className={styles.footer__copyright}>
          Copyright ⓒ RedCAT. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
