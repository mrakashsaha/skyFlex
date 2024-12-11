import React, { useContext, useState } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import auth from '../assets/auth.jpg';
import { useForm } from 'react-hook-form';
import { fetchURL } from '../../fetchURL';
import { getAdditionalUserInfo } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { setUser, setLoading, handleLogin, handleLoginWithGoogle } = useContext(AuthContext);

    const [firebaseError, setFirebaseError] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {

        handleLogin(data.email, data.password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setLoading(false);
                navigate(location?.state ? location?.state : "/");
            })
            .catch((error) => {
                setFirebaseError(error.code);
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
                            setLoading(false);

                        })

                }

                navigate(location?.state ? location.state : "/");
                setLoading(false);
            })
            .catch((error) => {
                setFirebaseError(error.code);
                setLoading(false);
            });

    }

    return (
        <div className='bg-red-500/20 bg-blend-overlay hero min-h-screen' style={{ "backgroundImage": `url(${auth})` }}>
            <div className='bg-base-100'>
                <div className='hero-content flex-col'>
                    <h2 className=' font-bold text-center text-xl'>LOGIN NOW</h2>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type='email' className="input input-bordered rounded-none" placeholder='Enter Your Email' {...register("email", { required: true })} />
                            {errors.email && <p className='text-red-600'>Email is required</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type='password' className="input input-bordered rounded-none" placeholder='Enter Password' {...register("password", { required: true })} />
                            {errors.password && <p className='text-red-600'>Password is required</p>}
                            {firebaseError && <p className='text-red-600'>{firebaseError}</p>}
                        </div>

                        <label className="label">
                            <span className='text-sm' >Don't have an account? <Link className='text-blue-700 underline' to={"/register"}>Register Here</Link> </span>
                        </label>


                        <input className='btn rounded-none bg-[#e90101] text-white px-6 py-2 hover:bg-[#e90101] transition' type="submit" value={'Login'} />
                        <div className='border border-t my-2'></div>
                        <a onClick={handleGoogleLogin} className='btn rounded-none bg-[black] text-white px-6 py-2 hover:bg-[black]/60 transition'> <FaGoogle />Continue with Google</a>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;