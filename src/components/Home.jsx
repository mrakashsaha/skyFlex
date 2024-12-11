import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchURL } from '../../fetchURL';
import Slider from './Slider';

const Home = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);

    useEffect(() => {
        fetch (`${fetchURL}/featured_movies`)
        .then (res => res.json())
        .then (data=> setFeaturedMovies(data));
    }, [featuredMovies]);

    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div className='w-11/12 md:w-11/12 lg:container mx-auto my-10'>
                <h4 className='text-4xl'>Featured Movies</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    featuredMovies.map((movie, idx)=> <MovieCard key={idx} movie={movie}></MovieCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;