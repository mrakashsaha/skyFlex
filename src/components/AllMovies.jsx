import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';

const AllMovies = () => {
    const loadedData = useLoaderData();
    const [movies, setMovies] = useState(loadedData);

    const [query, setQuery] = useState ('');

    const filterdMovies = movies.filter((movie) => movie.title.toLowerCase().includes('five start movie'));
    console.log(filterdMovies);

    return (

        <div className='container mx-auto'>
            <label className="input input-bordered flex items-center gap-2">
                <input onChange={(e)=>setQuery(e.target.value.toLowerCase())} type="text" className="grow" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>

            <h3>Movies: {movies.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center md:place-items-start'>
                {
                    movies.filter((movie) => movie.title.toLowerCase().includes(query)).map((movie, idx) => <MovieCard movie={movie} key={idx}></MovieCard>)
                }
            </div>



        </div>
    );
};

export default AllMovies;