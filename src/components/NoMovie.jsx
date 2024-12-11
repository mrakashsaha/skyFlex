import React from 'react';
import { Link } from 'react-router-dom';

const NoMovie = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-4xl dark:text-gray-400">
                            No Movie Found
                        </h2>     
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NoMovie;