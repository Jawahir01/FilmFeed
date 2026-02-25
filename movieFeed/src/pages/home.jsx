import React from 'react';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';

function Home() {

    const [searchTerm, setSearchTerm] = useState("");

    const movies = [
        {
            id: 1,
            title: "Inception",
            releaseYear: 2010,
            poster: "https://example.com/inception-poster.jpg"
        },
        {
            id: 2,
            title: "The Matrix",
            releaseYear: 1999,
            poster: "https://example.com/matrix-poster.jpg"
        },
        {
            id: 3,
            title: "Interstellar",
            releaseYear: 2014,
            poster: "https://example.com/interstellar-poster.jpg"   
        },
        {
            id: 4,
            title: "The Dark Knight",
            releaseYear: 2008,
            poster: "https://example.com/dark-knight-poster.jpg"
        },
        {
            id: 5,
            title: "Pulp Fiction",
            releaseYear: 1994,
            poster: "https://example.com/pulp-fiction-poster.jpg"}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for: " + searchTerm);
    }


    return (
        

        <div className="home-page">
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" placeholder="Search movies..." className="search-input"
                 value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;