import React from 'react'
import { useReducer, useState, useEffect } from 'react'
import { gameReducer } from '../reducers/gameReducer'
import { checkForWin, CloneBoard } from '../utils/utils'
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
    const [hasBeenReset, setHasBeenReset] = useState(false)
    const [showWinnerMessage, setShowWinnerMessage] = useState(false)

    useEffect(() => {
        if (gameState.gameOver) {
            setShowWinnerMessage(true)
        }
    }, [gameState.gameOver])

    const play = (colIndex) => {
        console.log('hola')
        if (gameState.gameOver) {
            return
        }

        let board = CloneBoard(gameState.board)
        findEmptyTile(board, colIndex)

        const gameResult = checkForWin(board)
        switch (gameResult) {
            case 1:
                dispatchGameState({ type: 'gameOver', message: 'Player Red wins' })
                break
            case 2:
                dispatchGameState({ type: 'gameOver', message: 'Player Yellow wins' })
                break
            case 'draw':
                dispatchGameState({ type: 'gameOver', message: 'Draw' })
                break
            default:
                toggleNextPlayer(board)
                break
        }
    }

    const updateCurrentPlayerCounter = () => {
        gameState.currentPlayer === gameState.player1
            ? dispatchGameState({ type: 'updatePlayer1Counter' })
            : dispatchGameState({ type: 'updatePlayer2Counter' })
    }

    const toggleNextPlayer = (board) => {
        const nextPlayer =
            gameState.currentPlayer === gameState.player1 ? gameState.player2 : gameState.player1
        dispatchGameState({ type: 'togglePlayer', nextPlayer, board })
    }

    const findEmptyTile = (board, colIndex) => {
        let row = 5
        while (row >= 0) {
            if (board[row][colIndex] === null) {
                board[row][colIndex] = gameState.currentPlayer
                updateCurrentPlayerCounter()
                break
            }
            row--
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
                    onClick={() => {
                        setHasBeenReset(true)
                        dispatchGameState({ type: 'newGame', initialGameState })
                    }}
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
                <Timer hasBeenReset={hasBeenReset} />
            </div>
            <div className='right-section'>
                <PlayerComponet player={'PLAYER 2'} counter={gameState.player2Counter} />
            </div>
        </div>
    )
}
