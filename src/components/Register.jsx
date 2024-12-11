import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from './Provider/AuthProvider';
import { fetchURL } from '../../fetchURL';
import { Link, useNavigate } from 'react-router-dom';
import { getAdditionalUserInfo } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import auth from '../assets/auth.jpg';

const Register = () => {

    const navigate = useNavigate();

    const { setUser, updateUserProfile, handleSignUp, setLoading, handleLoginWithGoogle } = useContext(AuthContext);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        const { name, email, photo } = data;

        const userDoc = { name, email, photo };

        handleSignUp(data.email, data.password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {

                        fetch(`${fetchURL}/users`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },

                            body: JSON.stringify(userDoc),

                        })
                            .then(res => res.json())
                            .then(data => {
                                // setLoading(false);
                                navigate('/')
                            })

                    })



            })
            .catch((error) => {
                console.log(error);
                alert(error.code)
                setLoading(false);
            });

    }

    const handleGoogleLogin = () => {
        handleLoginWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);

                const isNewUser = getAdditionalUserInfo(result).isNewUser;

                if (isNewUser) {

                    const userDoc = {
                        name: result.user.displayName,
                        email: result.user.email,
                        photo: result.user.photoURL,
                    }


                    fetch(`${fetchURL}/users`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },

                        body: JSON.stringify(userDoc),

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            setLoading(false);
                        })

                }

                navigate('/');
                setLoading(false);
            })
            .catch((error) => {
                // console.log (error);
                console.log(error);
                setLoading(false);
            });

    }

    return (
        <div className='bg-red-500/20 bg-blend-overlay hero min-h-screen' style={{ "backgroundImage": `url(${auth})` }}>
            <div className='bg-base-100 my-4'>
                <div className='hero-content min-w-2xl flex-col'>
                    <h2 className='text-center text-xl'>REGISTER</h2>
                    <form className=" py-2 card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type='text' className="input input-bordered rounded-none" placeholder='Enter Your Name' {...register("name", { required: true, minLength: 3 })} />

                            {errors.name && <p className='text-red-600'>Invalid Name</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type='email' className="input input-bordered rounded-none" placeholder='Enter Your Email' {...register("email", { required: true })} />

                            {errors.email && <p className='text-red-600'>Invalid Email Address</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type='url' className="input input-bordered rounded-none" placeholder='Enter Photo URL' {...register("photo", { required: true })} />

                            {errors.photo && <p className='text-red-600'>Photo URL is Required</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type='password' className="input input-bordered rounded-none" placeholder='Create Password' {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/i })} />

                            {errors.password && <p className='text-red-600'>Password must have an uppercase, a lowercase, and be 6+ characters.</p>}

                            <label className="label">
                                <span>Already have an account? <Link className='text-blue-700 underline' to={"/login"}>Login</Link> </span>
                            </label>
                        </div>


                        <input className='btn rounded-none bg-[#e90101] text-white px-6 py-2 hover:bg-[#e90101] transition' type="submit" value={"Signup"} />
                        <div className='border border-t my-2'></div>
                        <a onClick={handleGoogleLogin} className='btn rounded-none bg-[black] text-white px-6 py-2 hover:bg-[black]/60 transition'>Continue with Google</a>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;