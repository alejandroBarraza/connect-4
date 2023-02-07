import React from 'react'
import { useReducer, useState, useEffect } from 'react'
import { gameReducer } from '../reducers/gameReducer'
import { checkForWin, CloneBoard, generateNewBoard } from '../utils/utils'
import { Button } from './Button'
import { PlayerComponet } from './PlayerComponet'
import { Row } from './Row'
import { Timer } from './Timer'
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
    player1Counter: 0,
    player2Counter: 0,
}

export const Connect4 = () => {
    const [gameState, dispatchGameState] = useReducer(gameReducer, initialGameState)
    const [showWinnerMessage, setShowWinnerMessage] = useState(false)

    useEffect(() => {
        if (gameState.gameOver) {
            setShowWinnerMessage(true)
        }
    }, [gameState.gameOver])

    const play = (colIndex) => {
        if (gameState.gameOver) return

        let board = CloneBoard(gameState.board)
        for (let row = 5; row >= 0; row--) {
            if (board[row][colIndex] === null) {
                // find the first empty cell in the column
                board[row][colIndex] = gameState.currentPlayer
                gameState.currentPlayer === gameState.player1
                    ? dispatchGameState({ type: 'updatePlayer1Counter' })
                    : dispatchGameState({ type: 'updatePlayer2Counter' })
                break
            }
        }

        let result = checkForWin(board)
        if (result == 1) {
            // player 1 wins
            dispatchGameState({ type: 'gameOver', message: 'Player Red wins' })
        } else if (result == 2) {
            // player 2 wins
            dispatchGameState({ type: 'gameOver', message: 'Player Yellow wins' })
        } else if (result == 'draw') {
            // draw
            dispatchGameState({ type: 'gameOver', message: 'Draw' })
        } else {
            // no winner yet
            const nextPlayer =
                gameState.currentPlayer === gameState.player1
                    ? gameState.player2
                    : gameState.player1
            dispatchGameState({ type: 'togglePlayer', nextPlayer, board })
        }
    }

    return (
        <div className='container'>
            <div className='left-section'>
                <PlayerComponet player={'PLAYER 1'} counter={gameState.player1Counter} />
            </div>
            <div className='middle-section'>
                <button
                    className='button'
                    onClick={() => dispatchGameState({ type: 'newGame', initialGameState })}
                >
                    Reset
                </button>
                {showWinnerMessage ? (
                    <div>
                        <h1>winner: {gameState.message}</h1>
                        <p>for play again, click reset!</p>
                    </div>
                ) : (
                    <div className='board'>
                        {gameState.board.map((row, rowIndex) => (
                            <Row key={rowIndex} row={row} play={play} />
                        ))}
                    </div>
                )}
                <Timer gameOver={gameState.gameOver} />
            </div>
            <div className='right-section'>
                <PlayerComponet player={'PLAYER 2'} counter={gameState.player2Counter} />
            </div>
        </div>
    )
}
