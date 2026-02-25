import React from 'react';
import MovieCard from '../components/MovieCard';

function Home() {

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

    return (
        <div className="home-page">
            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;