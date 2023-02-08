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
            <span>{memoizedCounter}S</span>
        </div>
    )
}
