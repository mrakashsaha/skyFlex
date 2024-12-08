import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchURL } from '../../fetchURL';

const Home = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);

    useEffect(() => {
        fetch (`${fetchURL}/featured_movies`)
        .then (res => res.json())
        .then (data=> setFeaturedMovies(data));
    }, [featuredMovies]);

    return (
        <div>
            <div className='container mx-auto'>
                <h4 className='text-4xl'>Featured Movies</h4>
                <div className='grid grid-cols-3 gap-10'>
                {
                    featuredMovies.map((movie, idx)=> <MovieCard key={idx} movie={movie}></MovieCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;