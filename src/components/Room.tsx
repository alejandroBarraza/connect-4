import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export const Room = () => {
    const [random, setRandom] = React.useState(0)
    function randomId() {
        // get a random number from 1 t0 100
        setRandom(Math.floor(Math.random() * 100) + 1)
    }
    return (
        <div>
            <h1>Click at play for Generate an Id </h1>
            <button onClick={randomId}>Play</button>
            <p>send this code id to your friend!</p>
            {random > 0 && <h2>{random}</h2>}
            <Link to={`/connect4/${random}`}>Join Room</Link>
        </div>
    )
}
