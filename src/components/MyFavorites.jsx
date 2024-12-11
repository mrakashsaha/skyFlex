import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import Loading from './Loading';
import { fetchURL } from '../../fetchURL';
import FavCard from './FavCard';
import Swal from 'sweetalert2'
import subscribeBG from '../assets/page-header-bg.jpg'
import NoMovie from './NoMovie';


const MyFavorites = () => {
    const { user, loading } = useContext(AuthContext);

    const [favMovies, setFavMovies] = useState([]);

    const [countDelete, setcountDelete] = useState(1);

    useEffect(() => {
        fetch(`${fetchURL}/fav_movies/${user?.email}`)
            .then(res => res.json())
            .then(data => setFavMovies(data))
    }, [user, countDelete]);

    const handleDelete = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${fetchURL}/fav_movies/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setcountDelete(countDelete + 1);
                        }

                    })



            }
        })


    }

    return (
        <div>
            <div className="relative h-52 lg:h-60 bg-cover bg-center" style={{ backgroundImage: `url(${subscribeBG})` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-16 text-white">
                    <h1 className="text-4xl font-bold">My Fav Movies</h1>
                    <p className="text-sm font-light p-2">The Movies That Define My Taste</p>
                </div>
            </div>


            <div className='container mx-auto my-12'>
                {
                    loading && <Loading></Loading>
                }


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center md:place-items-start'>
                    {
                        favMovies.map((movie, idx) => <FavCard handleDelete={handleDelete} key={idx} movie={movie}></FavCard>)
                    }
                </div>

                {
                    !loading && favMovies.length ===0 && <NoMovie></NoMovie>
                }

            </div>

        </div>

    );
};

export default MyFavorites;