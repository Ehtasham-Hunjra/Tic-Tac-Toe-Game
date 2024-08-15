import React, { useState } from 'react';
import Square from './square';
import styles from './board.module.css';
function Board({onSquareClick, value}) {
    return (
        <>
        <div className={styles.board}>
            <div className={styles.boardRow}>
                <Square onSquareClick={() => onSquareClick(0)} value={value[0]}/>
                <Square onSquareClick={() => onSquareClick(1)} value={value[1]}/>
                <Square onSquareClick={() => onSquareClick(2)} value={value[2]}/>
            </div>
            <div className={styles.boardRow}>
                <Square onSquareClick={() => onSquareClick(3)} value={value[3]}/>
                <Square onSquareClick={() => onSquareClick(4)} value={value[4]}/>
                <Square onSquareClick={() => onSquareClick(5)} value={value[5]}/>
            </div>
            <div className={styles.boardRow}>
                <Square onSquareClick={() => onSquareClick(6)} value={value[6]}/>
                <Square onSquareClick={() => onSquareClick(7)} value={value[7]}/>
                <Square onSquareClick={() => onSquareClick(8)} value={value[8]}/>
            </div>
        </div>
        </>
    );
}

export default Board;
