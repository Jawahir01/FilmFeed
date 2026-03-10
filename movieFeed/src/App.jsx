import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MovieCard from './components/MovieCard'
import Home from './pages/home'
import Favorite from './pages/favorites'

function App() {
  return( 
  <main className="app-container">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
    </Routes>
  </main>);
}
export default App;
