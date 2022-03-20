import React from 'react';
import styles from './Card.module.css';
import PrimaryBTN from '../Buttons/Primary';
import BodyText from '../Texts/BodyText';
import SmallText from '../Texts/smallText';

// import { primaryColor } from '../../styles/colors.module.scss'; this how to import a sass variable in JS

const Card = () => {
  const handleBtnClick = () => {
    alert('you clicked me...')
  }
  return (
    <div className={styles.container}>
      <BodyText>
        this is a card
      </BodyText>
      <PrimaryBTN
        text='click me please'
        onClick={handleBtnClick}
        style={styles.btn}
      />
      <SmallText>
        last seen 10 mins
      </SmallText>
    </div>
  )
}

export default Card;