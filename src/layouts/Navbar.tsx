import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar shadow-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
                    >
                        <li>
                            <Link className='font-semibold' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='font-semibold' to="/books">Books</Link>
                        </li>
                        <li>
                            <Link className='font-semibold' to="/wishlist">WishList</Link>
                        </li>
                        <li>
                            <Link className='font-semibold' to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className=" text-2xl font-bold ps-3">
                    Book Catalog
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link className='font-semibold' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='font-semibold' to="/books">Books</Link>
                    </li>
                    <li>
                        <Link className='font-semibold' to="/wishlist">WishList</Link>
                    </li>
                    <li>
                        <Link className='font-semibold' to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;