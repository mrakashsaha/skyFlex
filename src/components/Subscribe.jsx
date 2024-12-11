import React from 'react';
import subscribeBG from '../assets/page-header-bg.jpg'

const Subscribe = () => {
    return (
        <div>

            <div className="relative h-96 lg:h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${subscribeBG})` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center ">
                    <div className="hero">
                        <div className="hero-content text-center text-white">
                            <div className="max-w-6xl space-y-2">
                                <h1 className="text-3xl md:text-4xl font-bold">Start for your first 30 days.</h1>
                                <p className="py-2 px-4">Ready to explore? Enter your email to create or restart your membership.
                                </p>
                                <div className="join gap-x-8 w-full">
                                    <input type='email' className="text-[#e90101] w-3/5 input input-md md:input-lg rounded-none input-bordered join-item" placeholder="Email" />
                                    <button className=" btn btn-md md:btn-lg text-white hover:text-black font-bold rounded-none border-[#e90101] bg-[#e90101] join-item">GET STARTED</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;