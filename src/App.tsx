import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navigation from './components/Navigation'

function App() {
    return (
        <>
            <Navigation/>
            <div className="container w-screen h-screen mx-auto max-w-2xl pt-5 p-2">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
