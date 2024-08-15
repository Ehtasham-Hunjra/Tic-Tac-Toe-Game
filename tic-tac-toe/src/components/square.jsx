import React from 'react';
import styles from './square.module.css';

const Square = ({onSquareClick, value}) => {
    
    return <button className={styles.squareBtn} onClick={onSquareClick}>{value}</button>;
};

export default Square;



