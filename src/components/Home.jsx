import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchURL } from '../../fetchURL';
import Slider from './Slider';
import BestPick from './BestPick';
import { Link } from 'react-router-dom';
import Subscribe from './Subscribe';

const Home = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);

    useEffect(() => {
        fetch(`${fetchURL}/featured_movies`)
            .then(res => res.json())
            .then(data => setFeaturedMovies(data));
    }, [featuredMovies]);

    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div className='w-11/12 md:w-11/12 lg:container mx-auto my-10'>
                <div>
                    <h4 className='pt-4 text-center font-extrabold spacing text-xs tracking-widest lg:text-md'>SPOTLIGHT FILMS</h4>
                    <h4 className='text-center text-5xl font-bold pt-2 pb-10 md:pb-16'> Our Featured Movies</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            featuredMovies.map((movie, idx) => <MovieCard key={idx} movie={movie}></MovieCard>)
                        }
                    </div>
                </div>

                <div>
                    <div className='text-center pt-10'>
                        <Link to={"all_movies"} className='btn drop-shadow-xl  md:btn-md lg:btn-lg text-white hover:text-black font-bold rounded-none border-[#e90101] bg-[#e90101] hover:bg-transparent hover:border-2 hover:border-[#e90101]'>WATCH ALL MOVIES</Link>
                    </div>
                </div>

            </div>
            <div>
                <BestPick></BestPick>
            </div>
            <div>
                <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Home;