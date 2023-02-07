import React, { Children } from 'react'

export const Button = ({ children, onRestartGame }) => {
    return (
        <button className='button' onClick={onRestartGame}>
            {children}
        </button>
    )
}
