import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';
import subscribeBG from '../assets/page-header-bg.jpg'

const AllMovies = () => {
    const loadedData = useLoaderData();
    const [movies, setMovies] = useState(loadedData);

    const [query, setQuery] = useState('');

    const filterdMovies = movies.filter((movie) => movie.title.toLowerCase().includes('five start movie'));
    return (

        <div className=''>
            <div className="relative h-52 lg:h-60 bg-cover bg-center" style={{ backgroundImage: `url(${subscribeBG})` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-16 text-white">
                    <h1 className="text-4xl font-bold">Find All Movies</h1>
                    <p className="text-sm font-light">All new released Hollywood and world movies here to watch</p>
                </div>
            </div>
            <div className='container mx-auto py-10 '>
                <div className='flex justify-between items-center my-8 pl-4 pr-8'>
                    <div>
                        <h2 className='text-xl md:text-3xl font-medium'>MOVIES: {movies.length}</h2>
                    </div>
                    <div className=''>
                    <label className="input input-bordered rounded-none flex items-center">
                            <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type="text" placeholder="Search" />
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
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center md:place-items-start'>
                    {
                        movies.filter((movie) => movie.title.toLowerCase().includes(query)).map((movie, idx) => <MovieCard movie={movie} key={idx}></MovieCard>)
                    }
                </div>



            </div>
        </div>
    );
};

export default AllMovies;