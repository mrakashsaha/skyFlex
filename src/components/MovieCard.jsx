import React from 'react';

const MovieCard = ({movie}) => {

    const {duration, genre, poster, rating, summary, title, year, _id} = movie;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={poster} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}
                        
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;