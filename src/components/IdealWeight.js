import React, { useState } from 'react';

const IdealWeight = () => {

    const [radio, setRadio] = useState('')
    const [heightFeet, setHeightFeet] = useState('')
    const [heightInch, setHeightInch] = useState('')
    let g;

    const calculateWeight = () => {
        if (radio === 'male') {
            g = 50;
        }
        if (radio === 'female') {
            g = 45.5;
        }
        if (g === undefined) {
            document.getElementById("IdealWeight_warning").style.display = 'block';
            document.getElementById("IdealWeight_input_warning").innerHTML = "Please Select Gender"
            g = 0
        }
        if (heightFeet && heightInch) {
            let ans = g + (0.91 * ((((parseInt(heightFeet) * 12) + parseInt(heightInch)) * 2.54) - 152.4));

            document.getElementById('IdealWeight').innerHTML = ans.toFixed(3);
        }
        else {
            document.getElementById("IdealWeight_warning").style.display = 'block';
            document.getElementById("IdealWeight_input_warning").innerHTML = "Please Put Valid Information"
        }

    }
    const clear = () => {
        document.getElementById('IdealWeight').innerHTML = '_';
        document.getElementById("IdealWeight_warning").style.display = 'none';
        setHeightFeet('');
        setHeightInch('');
    }
    return (
        <section className="block h-full p-10">
            <h1 className="text-4xl font-bold mb-10 text-center">Calculate IdealWeight</h1>
            <div className="flex flex-col md:flex-row w-full">
                <div className=" form-control w-full md:w-1/2 flex flex-col p-8 bg-lime-200 rounded-2xl mx-2">


                    <div className=" w-full flex flex-row justify-center items-center">
                        <label className="input-group my-2 w-full">
                            <span className="bg-lime-500 w-24 h-12  font-semibold">Gender</span>
                            <div className="w-full flex flex-row justify-center items-center">
                                <div className="w-full pl-4 flex justify-around">
                                    <div>
                                        <input onChange={(e) => setRadio(e.target.value)} value="male" type="radio" id="IdealWeight_male" name="IdealWeight-gender" />
                                        <label className="font-semibold">Male</label>
                                    </div>
                                    <div>
                                        <input onChange={(e) => setRadio(e.target.value)} value='female' type="radio" id="IdealWeight_female" name="IdealWeight-gender" />
                                        <label className="font-semibold">Female</label>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className=" w-full flex flex-row justify-center items-center">
                        <label className="input-group my-2 w-full">
                            <span className=" bg-lime-500 w-26  font-semibold">Height</span>
                            <input value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} min="0" id="IdealWeight_height_feet" type="number" placeholder="feet"
                                className="input input-bordered w-full" />
                            <input value={heightInch} onChange={(e) => setHeightInch(e.target.value)} min="0" max="11" id="IdealWeight_height_inch" type="number" placeholder="inch"
                                className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div style={{ display: 'none' }} id="IdealWeight_warning" className="alert alert-error shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span id="IdealWeight_input_warning"></span>
                        </div>
                    </div>
                    <button onClick={calculateWeight}
                        className="btn btn-primary mt-4 px-10 w-full hover:text-white hover:bg-lime-800">Calculate
                    </button>
                    <button onClick={clear}
                        className="btn bg-red-500 text-white border-current text-center mt-10 mx-auto px-10 w-1/5 hover:text-white hover:bg-red-800">Clear
                    </button>
                </div>

                <div id="IdealWeight_result"
                    className="w-full md:w-1/2 p-8 bg-lime-200 rounded-2xl mx-2 mt-6 md:mt-0 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold ">Your IdealWeight: <span id="IdealWeight"
                        className="text-neutral">_</span>kg</h1>
                    <span id="category_IdealWeight"></span>
                </div>
            </div>
        </section>
    );
};

export default IdealWeight;