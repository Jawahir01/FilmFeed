function MovieCard({movie}) {

    const favouriteClick = () => {
        console.log("Favourite button clicked for movie: " + movie.title);
    }

    return <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.poster} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={favouriteClick}>
                        ❤️
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.releaseYear}</p>
            </div>
    </div>
}

export default MovieCard;

