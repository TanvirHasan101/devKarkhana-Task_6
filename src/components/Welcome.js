import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <main className="bg-lime-200 w-3/4 h-fit rounded-lg mx-auto mt-20 text-center text-3xl">

                <div id="welcome-div" className="p-4">Pick a Calculator
                    <ul className="flex-row ">
                        <li><Link to={'/bmi'} className="btn btn-ghost normal-case text-xl ">BMI Calculator</Link></li>
                        <li><Link to={'/bmr'} className="btn btn-ghost normal-case text-xl ">BMR Calculator</Link></li>
                        <li><Link to={'/calorie'} className="btn btn-ghost normal-case text-xl ">Calorie Calculator</Link></li>
                        <li><Link to={'/idealweight'} className="btn btn-ghost normal-case text-xl ">Ideal Weight Calculator</Link>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Welcome;