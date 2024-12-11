import React from 'react';
import subscribeBG from '../assets/page-header-bg.jpg'
import Swal from 'sweetalert2';

const ContactUs = () => {
    const handleSendMsg = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div>
            <div className="relative h-52 lg:h-60 bg-cover bg-center" style={{ backgroundImage: `url(${subscribeBG})` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-16 text-white">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="text-sm font-light p-2">We'd Love to Hear From You</p>
                </div>
            </div>

            <div>
                <div className="container mx-auto px-4 py-10">
                    <div className="bg-base-100 shadow-md rounded-none p-6 md:p-8 w-full">
                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="flex flex-col gap-6 lg:w-1/2">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold">Phone</h3>
                                    <p className='font-light'>Inquiry: (+880) 1518 460 475</p>
                                    <p className='font-light'>Hotline: 121 </p>
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold">Email</h3>
                                    <p className='font-light'>support@skyflex.com</p>
                                    <p className='font-light'>inquiry@skyflex.com</p>
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold">Location</h3>
                                    <p className="font-light">North Badda, Dhaka-1212</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center lg:w-1/2">
                                <form onSubmit={handleSendMsg} className="flex flex-col gap-6 w-full">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <input
                                            required
                                            type="text"
                                            name="fullName"
                                            placeholder="Name"
                                            className="input input-bordered w-full md:w-1/2 p-3 border rounded-none"
                                        />
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="input input-bordered w-full md:w-1/2 p-3 border rounded-none"
                                        />
                                    </div>
                                    <input
                                        required
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        className="input input-bordered w-full p-3 border rounded-none"
                                    />
                                    <textarea
                                        required
                                        name="message"
                                        placeholder="Type your message..."
                                        rows="5"
                                        className="textarea textarea-bordered w-full p-3 border rounded-none"
                                    ></textarea>
                                    <div className="flex justify-center">
                                        <button
                                            required
                                            type="submit"
                                            className="rounded-none btn bg-[#e90101] text-white px-6 py-2 hover:bg-[#e90101] transition"
                                        >
                                            SEND MESSAGE
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
