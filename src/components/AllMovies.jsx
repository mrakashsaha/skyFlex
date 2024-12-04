import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllMovies = () => {
    const loadedData = useLoaderData ();
    const [movies, setMovies] = useState(loadedData);
    console.log (loadedData);

    return (

        <div>
            <h3>Movies: {movies.length}</h3>
        </div>
    );
};

export default AllMovies;