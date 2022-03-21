import React from 'react';
import PropTypes from 'prop-types'
import styles from './Card.module.css';
import PrimaryBTN from '../Buttons/Primary';
import BodyText from '../Texts/BodyText';
import SmallText from '../Texts/smallText';

// import { primaryColor } from '../../styles/colors.module.scss'; this how to import a sass variable in JS

const Card = ({ title = 'this is the title'}) => {
  const handleBtnClick = () => {
    alert('you clicked me...')
  }
  return (
    <div className={styles.container}>
      <BodyText>
        {title}
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

Card.propTypes = {
  title: PropTypes.string
}

export default Card;