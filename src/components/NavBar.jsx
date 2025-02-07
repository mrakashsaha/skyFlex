import React, { useContext, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const NavBar = () => {

    const navigate = useNavigate();
    const { user, handleLogout, loading } = useContext(AuthContext);


    const handleLogoutUser = () => {
        handleLogout()
            .then(navigate("/login"))
            .catch(error => console.log(error));
    }

    const menuList =
        <>
            <li><NavLink to={"/"} >Home</NavLink></li>
            <li><NavLink to={"/all_movies"} >All Movies</NavLink></li>
            <li><NavLink to={"/add_movies"} >Add Movies</NavLink></li>
            <li><NavLink to={`/my_fav/`} >My Favorites</NavLink></li>
            <li><NavLink to={"/contact_us"} >Contact Us</NavLink></li>
        </>


    return (
        <div className='bg-base-100 shadow-sm sticky w-full z-20'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn rounded-none btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                menuList
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">SkyFlex</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuList
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="swap swap-rotate px-4">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="dark" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-8 w-8 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-8 w-8 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    {(loading) ?
                        <>
                            <span className="loading loading-ring loading-lg"></span>
                        </>
                        :
                        user ?
                            <>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle flex avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="profile img"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <button onClick={handleLogoutUser} className='ml-3 btn rounded-none'>Logout</button>
                            </>
                            :
                            <>
                                <Link to={"/register"} className="btn rounded-none mx-3">Register</Link>
                                <Link to={"/login"} className="btn rounded-none">Login</Link>
                            </>


                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;