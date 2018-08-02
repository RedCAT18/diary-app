import React from 'react';
import styles from './header.scss';

import { Icon } from 'react-icons-kit';
import { u1F1E9 } from 'react-icons-kit/noto_emoji_regular/u1F1E9';

const Header = () => {
  return (
    <div className={styles.header__box}>
      <div className={styles.header__icon}>
        <Icon icon={u1F1E9} size={32} />
      </div>
      <div className={styles.header__userinfo}>UserName</div>
    </div>
  );
};

export default Header;
