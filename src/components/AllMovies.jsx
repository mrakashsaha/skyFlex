import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';

const AllMovies = () => {
    const loadedData = useLoaderData();
    const [movies, setMovies] = useState(loadedData);

    return (

        <div>
            <h3>Movies: {movies.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    movies.map(movie => <MovieCard movie={movie} key={movie.id}></MovieCard>)
                }
            </div>



        </div>
    );
};

export default AllMovies;