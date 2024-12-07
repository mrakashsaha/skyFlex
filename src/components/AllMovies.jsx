import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';

const AllMovies = () => {
    const loadedData = useLoaderData();
    const [movies, setMovies] = useState(loadedData);

    return (

        <div className='container mx-auto'>
            
            <h3>Movies: {movies.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center md:place-items-start'>
                {
                    movies.map((movie, idx) => <MovieCard movie={movie} key={idx}></MovieCard>)
                }
            </div>



        </div>
    );
};

export default AllMovies;