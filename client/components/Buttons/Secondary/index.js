import React from 'react';
import styles from './styles.module.css';

const Secondary = ({
	style,
	text = 'button',
	onClick,
	disabled = false
}) => {
	console.log('style: ', style);
	return (
		<div>
			<button disabled={disabled} onClick={() => onClick()} className={`btn ${style ? style: ''} ${styles.btn}`}>{text}</button>
		</div>
	)
}

export default Secondary;