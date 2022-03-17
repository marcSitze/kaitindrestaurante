import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>this is a card</p>
    </div>
  )
}

export default Card;