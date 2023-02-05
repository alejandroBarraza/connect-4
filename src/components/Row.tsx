import React from 'react'
import { Cell } from './Cell'

export const Row = ({ row, play }) => {
    return (
        <div className='row'>
            {row.map((cell, cellIndex) => (
                <Cell key={cellIndex} value={cell} columIndex={cellIndex} play={play} />
            ))}
        </div>
    )
}
