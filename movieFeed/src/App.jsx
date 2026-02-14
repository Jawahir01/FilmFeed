import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return( 
  <>
    <MovieCard movie={{
      title: "Inception",
      releaseYear: 2010,
      poster: "https://example.com/inception-poster.jpg"
    }} />
    <MovieCard movie={{
      title: "The Matrix",
      releaseYear: 1999,
      poster: "https://example.com/matrix-poster.jpg"
    }} />
  </>);
}
export default App;
