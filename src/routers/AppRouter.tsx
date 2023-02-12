import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Connect4 } from '../components/Connect4'
import { Room } from '../components/Room'
import { Rules } from '../components/Rules'
export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Room />} />
                <Route path='/connect4/:gameId' element={<Connect4 />} />
            </Routes>
        </Router>
    )
}
