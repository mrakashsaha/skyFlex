import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import imdbLogo from '../assets/imdb-logo.svg'
import { AuthContext } from './Provider/AuthProvider';
import { fetchURL } from '../../fetchURL';
import Swal from 'sweetalert2'

const MovieDetails = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { convertMinutesToTime } = useContext(AuthContext);
    const movieData = useLoaderData();
    const { duration, genre, poster, rating, summary, title, year, _id } = movieData;



    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`${fetchURL}/movies/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                navigate("/all_movies")
                            }


                        })



                }
            });



    }

    const handleAddToFav = (id) => {

        const favMovieDoc = {
            userEmail: user.email,
            favId: id,
            duration, genre, poster, rating, summary, title, year,
        }

        fetch(`${fetchURL}/fav_movies`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(favMovieDoc),

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Movie has been added to Favourite",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops! Somthing went wrong.",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }

    return (
        <div className='container mx-auto my-20'>
            <div className='max-w-7xl mx-auto lg:grid lg:grid-cols-12 border-b gap-10'>
                <div className='col-span-9'>
                    <div className='p-4 space-y-6'>
                        <h1 className='text-7xl font-bold'>{title}</h1>
                        {/* All badge component */}
                        <div className='flex flex-wrap items-center'>
                            <div className='w-12 h-12 font-bold'>
                                <CircularProgressbar
                                    value={rating * 20} text={`${(parseFloat(rating) * 2).toFixed(1)}`}
                                    styles={buildStyles({
                                        textSize: '30px',
                                        pathColor: `#28a745`,
                                        textColor: '#111111',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                    })} />
                            </div>
                            <div className='h-7'>
                                <img className="h-full ml-3 mr-1" src={imdbLogo} alt="imdb-logo" />
                            </div>
                            <h3 className='text-xl'>Score</h3>


                            <h3 className='text-xl font-semibold ml-4'>{year}</h3>


                            <div className='mx-4 pl-1 border-2 border-black h-[23px] leading-[20px] inline-block'>4K <b className='bg-black text-white dark:text-green-400 px-1'>Ultra HD</b></div>

                            <h3 className='text-xl'>{' Duration: ' + convertMinutesToTime(duration) + ' min'}</h3>
                            <div className="font-semibold badge badge-outline text-lg p-3 mx-4">CC</div>
                            <h3 className='text-xl text-red-500 font-semibold'>{genre}</h3>

                        </div>

                        <p className=''>{summary}</p>

                        <div className="grid grid-cols-[max-content_auto] gap-x-4 pb-4">
                            <span className="font-bold">Director</span>
                            <span>: Chris Milewski</span>

                            <span className="font-bold">Casting:</span>
                            <span>: Andrea Autullo, Jeffrey Voice, Chiara Pavoni</span>

                            <span className="font-bold">Production:</span>
                            <span>: Digiflex</span>
                        </div>
                    </div>

                </div>
                <div className='col-span-3 border-l'>
                    <div className='pl-6 pb-6'>
                        <img src={poster} alt="" />
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto flex flex-wrap gap-3 my-5 p-3 lg:p-0'>
                <button onClick={() => handleAddToFav(_id)} className='btn text-md lg:text-xl md:btn-md lg:btn-lg rounded-none bg-black text-white hover:bg-[#e90101] border-none'>Add to Favourite</button>
                <Link to={`/update_movie/${_id}`} className='btn text-md lg:text-xl md:btn-md lg:btn-lg rounded-none btn-outline border-black border-2 text-black hover:bg-black'>Update Movie</Link>
                <button onClick={() => handleDelete(_id)} className='btn text-md lg:text-xl md:btn-md lg:btn-lg rounded-none btn-outline border-[#e90101] border-2 text-[#e90101] hover:bg-black'>Delete Movie</button>
                <Link to={"/all_movies"} className='btn text-md lg:text-xl md:btn-md lg:btn-lg rounded-none btn-outline border-black border-2 text-black hover:bg-black'>Back to All Movies</Link>
            </div>
        </div>
    );
};

export default MovieDetails;