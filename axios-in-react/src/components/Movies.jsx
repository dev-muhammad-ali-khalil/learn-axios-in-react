import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { getMovies } from '../services/GetService';

const Movies = () => {
    const [data, setData] = useState([]);

    const getMovieData = async () => {
        try {
            const res = await getMovies();
            setData(res.data.Search);
        } catch (error) {
            console.error("Error message:", error.message);
            console.error("Error status:", error.status);
            console.error("Error data:", error.response.data);
        }
    }

    useEffect(() => {
        getMovieData();
    }, [])

    return (
        <div style={{ overflow: 'hidden' }}>
            <h1>Movies</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: '20px', overflowX: 'auto', overflowY: 'hidden' }}>
                {
                    data.map((item) => (
                        <MovieCard movieData={item} key={item.imdbID} />
                    ))
                }
            </div>
        </div>
    )
}

export default Movies