import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GameDetail from './pages/GameDetail';
import Home from './pages/Home';





function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game/:id" element={<GameDetail />} />

            </Routes>
        </BrowserRouter>
    )

}

export default App;
