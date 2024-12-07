import React, { useContext, useState } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { fetchURL } from '../../fetchURL';
import { getAdditionalUserInfo } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { setLoading, handleLogin, handleLoginWithGoogle } = useContext(AuthContext);

    const [firebaseError, setFirebaseError] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {

        handleLogin(data.email, data.password)
            .then((result) => {
                console.log(result);
                setLoading(false);
                navigate('/')
            })
            .catch((error) => {
                // console.log (error);
                setFirebaseError(error.code);
                setLoading(false);
            });

    }

    const handleGoogleLogin = () => {
        handleLoginWithGoogle()
            .then((result) => {

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

                navigate('/')
                setLoading(false);
            })
            .catch((error) => {
                // console.log (error);
                setFirebaseError(error.code);
                setLoading(false);
            });

    }




    return (
        <div>
            <h2 className='text-center text-4xl'>Login to your account</h2>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email' className="input input-bordered" placeholder='Enter Your Email' {...register("email", { required: true })} />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password' className="input input-bordered" placeholder='Create Password' {...register("password", { required: true })} />

                    {firebaseError && <p className='text-red-600'>{firebaseError}</p>}
                </div>

                <label className="label">
                    <span>Don't have an account? <Link className='text-blue-700 underline' to={"/register"}>Register Here</Link> </span>
                </label>


                <input className='btn' type="submit" value={'Login'} />
                <a onClick={handleGoogleLogin} className='btn'>Continue with Google</a>
            </form>
        </div>
    );
};

export default Login;