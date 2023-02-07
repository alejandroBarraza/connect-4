export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'newGame':
            return {
                ...action.initialGameState,
            }

        case 'togglePlayer':
            return {
                ...state,
                currentPlayer: action.nextPlayer,
                board: action.board,
            }

        case 'gameOver':
            return {
                ...state,
                gameOver: true,
                message: action.message,
                board: action.board,
            }

        case 'updateMessage':
            return {
                ...state,
                message: action.message,
            }

        case 'updatePlayer1Counter':
            return {
                ...state,
                player1Counter: state.player1Counter + 1,
            }
        case 'updatePlayer2Counter':
            return {
                ...state,
                player2Counter: state.player2Counter + 1,
            }

        default:
            throw Error(`Action "${action.type}" not valid action.`)
    }
}
