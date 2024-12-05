import React, { useContext, useState } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { handleLogin, handleLoginWithGoogle } = useContext(AuthContext);

    const [firebaseError, setFirebaseError] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {

        console.log(data.email);

        handleLogin(data.email, data.password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                // console.log (error);
                setFirebaseError(error.code);
            });

    }

    const handleGoogleLogin = () => {
        handleLoginWithGoogle()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                // console.log (error);
                setFirebaseError(error.code);
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


                <input className='btn' type="submit" />
                <a onClick={handleGoogleLogin} className='btn'>Login with Google</a>
            </form>
        </div>
    );
};

export default Login;