export const CloneBoard = (board) => {
    return [
        [...board[0]],
        [...board[1]],
        [...board[2]],
        [...board[3]],
        [...board[4]],
        [...board[5]],
    ]
}

export const generateNewBoard = () => {
    return [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]
}

const checkVertical = (board) => {
    for (let r = 3; r < 6; r++) {
        for (let c = 0; c < 7; c++) {
            if (board[r][c]) {
                if (
                    board[r][c] === board[r - 1][c] &&
                    board[r][c] === board[r - 2][c] &&
                    board[r][c] === board[r - 3][c]
                ) {
                    return board[r][c]
                }
            }
        }
    }
}

const checkHorizontal = (board) => {
    for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c]) {
                if (
                    board[r][c] === board[r][c + 1] &&
                    board[r][c] === board[r][c + 2] &&
                    board[r][c] === board[r][c + 3]
                ) {
                    // return color of player
                    return board[r][c]
                }
            }
        }
    }
}

const checkDiagonalRight = (board) => {
    for (let r = 3; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c]) {
                if (
                    board[r][c] === board[r - 1][c + 1] &&
                    board[r][c] === board[r - 2][c + 2] &&
                    board[r][c] === board[r - 3][c + 3]
                ) {
                    return board[r][c]
                }
            }
        }
    }
}

const checkDiagonalLeft = (board) => {
    for (let r = 3; r < 6; r++) {
        for (let c = 3; c < 7; c++) {
            if (board[r][c]) {
                if (
                    board[r][c] === board[r - 1][c - 1] &&
                    board[r][c] === board[r - 2][c - 2] &&
                    board[r][c] === board[r - 3][c - 3]
                ) {
                    return board[r][c]
                }
            }
        }
    }
}

const checkDraw = (board) => {
    for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 7; c++) {
            if (board[r][c] === null) {
                return null
            }
        }
    }
    return 'draw'
}

export const checkForWin = (board) => {
    // return color of player who win or draw(null)
    return (
        checkVertical(board) ||
        checkDiagonalRight(board) ||
        checkDiagonalLeft(board) ||
        checkHorizontal(board) ||
        checkDraw(board)
    )
}
