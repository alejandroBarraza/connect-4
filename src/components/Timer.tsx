import React, { useState, useMemo, useEffect } from 'react'

export const Timer = () => {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prev) => prev + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    const memoizedCounter = useMemo(() => timer, [timer])
    return (
        <div className='timer-container'>
            <h6>Game Time</h6>
            <span>{memoizedCounter} s</span>
        </div>
    )
}
