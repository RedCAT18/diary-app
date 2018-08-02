import React from 'react';
import styles from './main.scss';
import mainImage from '../../assets/images/Write_your_own_story_6104.svg';

import Login from '../../components/Login';
import Footer from '../../components/Footer';

const Main = () => {
  return (
    <div className={styles.main}>
      <Login />
      <img src={mainImage} className={styles.main__image} alt="main image" />
      <div className={styles.main__paragraph}> Remain your daily life. </div>
      <Footer />
    </div>
  );
};

export default Main;
