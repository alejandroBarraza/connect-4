import React from 'react'

export const Cell = ({ value, columIndex, play }) => {
    let color = 'white-circle'

    if (value === 1) {
        color = 'red-circle'
    } else if (value === 2) {
        color = 'yellow-circle'
    }

    return (
        <div className='game-cell' onClick={() => play(columIndex)}>
            <div className={color}></div>
        </div>
    )
}
