import React from 'react'
import { useReducer, useState } from 'react'
import { Row } from './Row'

const gameReducer = (state, action) => {
    return state
}

//3
const initialGameState = {
    player1: 1,
    player2: 2,
    currentPlayer: 1,
    board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ],
    gameOver: false,
    message: '',
}

export const Connect4 = () => {
    console.log(initialGameState.board)
    const [gameState, dispatchGameState] = useReducer(gameReducer, initialGameState)
    const play = (colIndex) => {}

    return (
        <div className='board'>
            {gameState.board.map((row, rowIndex) => (
                <Row key={rowIndex} row={row} play={play} />
            ))}
        </div>
    )
}
