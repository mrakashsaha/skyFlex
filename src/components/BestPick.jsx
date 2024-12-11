import React from 'react';
import bestPick from '../assets/bestPick.png'
import multi from '../assets/multi.png'
import server from '../assets/server.png'
import multiDevice from '../assets/multi_device.png'

const BestPick = () => {
    return (
        <div>
            <div className="hero bg-base-200 py-10">
                <div className="hero-content flex-col-reverse md:flex-row">
                    <img
                        src={bestPick}
                        className="min-w-2/6 md:w-2/5" />
                    <div className='p-4 md:p-16'>
                        <h1 className="text-4xl font-bold mb-8 md:mb-12 w-11/12">Explore, Engage, and Elevate <u>Your</u>  Experience</h1>

                        <div className='space-y-8'>
                            <div className='flex flex-col md:flex-row md:items-center gap-x-6'>
                                <div className='w-16 md:w-24 pb-6 md:pb-0'>
                                    <img src={multi} alt="Icon" className='w-full' />
                                </div>
                                <div>
                                    <h4 className='pb-3 text-xl font-bold'>Acess Anytime, Anywhere</h4>
                                    <p className='w-11/12'>Stay in control of your movie collection. Edit details, add ratings, or update your watchlist wherever you are.</p>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row md:items-center gap-x-6'>
                                <div className='w-16 md:w-24 pb-6 md:pb-0'>
                                    <img src={multiDevice} alt="Icon" className='w-full' />
                                </div>
                                <div>
                                    <h4 className='pb-3 text-xl font-bold'>Discover and Review</h4>
                                    <p className='w-11/12'>Find your favorite movies and share your thoughts through reviews. Join a community of movie enthusiasts to discuss and rate titles.</p>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row md:items-center gap-x-6'>
                                <div className='w-16 md:w-24 pb-6 md:pb-0'>
                                    <img src={server} alt="Icon" className='w-full' />
                                </div>
                                <div>
                                    <h4 className='pb-3 text-xl font-bold'>Add New Titles Effortlessly</h4>
                                    <p className='w-11/12'>Expand your collection by adding movies you love or new releases you discover. Build your ultimate movie library.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestPick;