import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const NavBar = () => {
    const {userInfo, handleLogout, loading} = useContext (AuthContext);
    // if (loading) {
    //     return;
    // }

    const handleLogoutUser = () => {
        handleLogout()
        .then (console.log ('user loguted sucessfully'))
        .catch (error => console.log (error));
    }

    const menuList =
        <>
            <li><NavLink to={"/"} >Home</NavLink></li>
            <li><NavLink to={"/all_movies"} >All Movies</NavLink></li>
            <li><NavLink to={"/add_movies"} >Add Movies</NavLink></li>
            <li><NavLink to={"/my_fav"} >My Favorites</NavLink></li>
            <li><NavLink to={"/extra_route"} >Extra Route</NavLink></li>
        </>


   return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuList
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {!loading && <span>{userInfo?.name}</span>}
                    <Link to={"/register"} className="btn rounded-md">Register</Link>
                    <Link to={"/login"} className="btn">Login</Link>
                    <button onClick={handleLogoutUser} className='btn'>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;