import React from "react";

const MovieCard = ({ movieData }) => {
    const { Title, Year, imdbID, Type, Poster } = movieData;

    return (
        <div style={{ border: '1px solid gray', width: '200px' }}>
            <img style={{ width: '200px', height: '280px' }} src={Poster} alt={imdbID} />
            <h4>{Title}</h4>
            <span>Year: {Year} | Type: {Type}</span>
        </div>
    );
}

export default MovieCard