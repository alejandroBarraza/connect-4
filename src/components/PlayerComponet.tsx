import React, { useState } from 'react'
import { gameReducer } from '../reducers/gameReducer'
export const PlayerComponet = ({ player, counter }) => {
    return (
        <div className='player-container'>
            <h4>{player}</h4>
            <h1>{counter}</h1>
        </div>
    )
}
