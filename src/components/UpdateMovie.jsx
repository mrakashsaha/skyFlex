import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import { fetchURL } from '../../fetchURL';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateMovie = () => {
    const currentMovieData = useLoaderData();
    const [ratingError, setRatingError] = useState(false);
    const { duration, genre, poster, rating, summary, title, year, _id } = currentMovieData;

    const [rating2, setRating] = useState(rating);

    const handleRating = (rate) => {
        setRating(rate);
        setValue("rating", `${rate}`)
    }


    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (!rating2) {
            setRatingError(true)
            return;
        }


        fetch(`${fetchURL}/update_movie/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(data),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    if (data.modifiedCount>0) {
                        Swal.fire({
                            icon: "success",
                            title: "Movie has been updated sucessfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                    else {
                        Swal.fire({
                            icon: "info",
                            title: "No change found for Update!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    
                }

            })

    }


    return (
        <div>
            <h2 className='text-3xl text-center'>Update Movie</h2>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie Poster</span>
                    </label>
                    <input type='url' className="input input-bordered" placeholder='Enter Poster URL' defaultValue={poster} {...register("poster", { required: true })} />

                    {errors.poster && <p className='text-red-600'>Poster is required</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie Title</span>
                    </label>
                    <input type='text' className="input input-bordered" placeholder='Enter Title of Movie' defaultValue={title} {...register("title", { required: true, minLength: 2 })} />

                    {errors.title && <p className='text-red-600'>Movie title require atleast 2 characters</p>}
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Genre</span>
                    </label>
                    <select className="select select-bordered" defaultValue={genre} {...register("genre", { required: true })}>
                        <option value="">-- Select Genre --</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Horror">Horror</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Romance">Romance</option>
                        <option value="Crime">Crime</option>
                    </select>

                    {errors.genre && <p className='text-red-600'>Please choose Genre</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Duration</span>
                    </label>
                    <input className='input input-bordered' placeholder='157' type="number" defaultValue={duration} {...register("duration", { required: true, min: 60 })} />

                    {errors.duration && <p className='text-red-600'>Movie duration atleast 60 minutes</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Release Year</span>
                    </label>
                    <select className='select select-bordered' defaultValue={year} {...register("year", { required: true })}>
                        <option value="">-- Select Year --</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>

                    {errors.year && <p className='text-red-600'>Please select the relsease year</p>}
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rate This Movie</span>
                    </label>
                    <Rating initialValue={rating} onClick={handleRating} transition allowFraction showTooltip tooltipDefaultText='0' />
                    {ratingError && <p className='text-red-600'>Ratting is Required</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Summary</span>
                    </label>
                    <textarea className='textarea textarea-bordered' defaultValue={summary}  {...register("summary", { required: true, minLength: 10 })} />

                    {errors.summary && <p className='text-red-600'>Summery should be atleast 10 characters</p>}
                </div>

                <input className='btn' type="submit" />
            </form>
        </div>
    );
};

export default UpdateMovie;