import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="bg-lime-100">



            <div className="navbar bg-lime-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-lime-200">
                            <li><Link to={'/bmi'} >BMI Calculator</Link></li>
                            <li><Link to={'/bmr'} >BMR Calculator</Link></li>
                            <li><Link to={'/calorie'} >Calorie Calculator</Link></li>
                            <li><Link to={'/idealweight'}>Ideal Weight Calculator</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-3xl text-black content-center items-center " to={'/'}>
                        <span>CheckUps </span>
                        <span className="material-symbols-outlined mx-5 text-3xl">
                            calculate
                        </span>
                    </Link>
                </div>
                <div className="navbar-center mr-4 hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/bmi'} className="btn btn-ghost normal-case text-xl ">BMI Calculator</Link></li>
                        <li><Link to={'/bmr'} className="btn btn-ghost normal-case text-xl ">BMR Calculator</Link></li>
                        <li><Link to={'/calorie'} className="btn btn-ghost normal-case text-xl ">Calorie Calculator</Link></li>
                        <li><Link to={'/idealweight'} className="btn btn-ghost normal-case text-xl ">Ideal Weight
                            Calculator</Link></li>
                    </ul>
                </div>

            </div>









        </div>
    );
};

export default Header;