import React from 'react'
import { Button } from './Button'

export const Result = ({ winner }) => {
    return (
        <div className='result-container'>
            <h4>{winner}</h4>
            <h1>WINS</h1>
            <h6>reset for a new game</h6>
        </div>
    )
}
