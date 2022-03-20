import React from 'react';
import styles from './styles.module.css';

const HeaderTitle = ({ style, children }) => {
  return (
    <div>
      <p className={`${styles.text} ${style ? style: ''}`}>{children}</p>
    </div>
  )
}

export default HeaderTitle;