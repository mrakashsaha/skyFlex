import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import Loading from './Loading';
import { fetchURL } from '../../fetchURL';
import FavCard from './FavCard';

const MyFavorites = () => {
    const { userInfo, loading } = useContext(AuthContext);

    const [favMovies, setFavMovies] = useState([]);

    const [countDelete, setcountDelete] = useState(1);
    
    useEffect (()=> {
        fetch (`${fetchURL}/fav_movies/${userInfo?.email}`)
        .then (res => res.json ())
        .then (data => setFavMovies (data))
    }, [userInfo, countDelete]);

    console.log (favMovies);

    const handleDelete = (id) => {

        fetch(`${fetchURL}/fav_movies/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if( data.deletedCount>0) {
                    setcountDelete (countDelete+1);
                }

            })

    }

    return (
        <div className='container mx-auto'>
            {
                loading && <Loading></Loading>
            }

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center md:place-items-start'>
                {
                    favMovies.map ((movie, idx)=> <FavCard handleDelete ={handleDelete} key={idx} movie={movie}></FavCard>)
                }
            </div>

        </div>
    );
};

export default MyFavorites;