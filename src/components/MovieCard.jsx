import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { AuthContext } from './Provider/AuthProvider';

const MovieCard = ({ movie }) => {

    const { convertMinutesToTime } = useContext(AuthContext);



    const { duration, genre, poster, rating, summary, title, year, _id } = movie;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl rounded-none">
                <figure className='relative'>
                    <img className='w-full h-[420px] object-cover' src={poster} />
                    <span className='absolute bg-black/70 text-white right-2 bottom-2 px-1'>{convertMinutesToTime(duration)} min</span>
                </figure>
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <span>{genre}, {year}</span>
                        <Rating size={25} initialValue={rating} allowFraction={true} readonly={true} ></Rating>
                    </div>
                    <h2 className="card-title text-lg">{title}</h2>
                    <p>{summary.length > 50 ? summary.slice(0, 50) + "..." : summary}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/movies/${_id}`} className="btn btn-md rounded-none">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;