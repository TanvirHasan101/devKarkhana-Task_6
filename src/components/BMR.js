import React, { useState } from 'react';


const BMR = () => {

    const [heightFeet, setHeightFeet] = useState('')
    const [heightInch, setHeightInch] = useState('')
    const [Weight, setWeight] = useState('')
    const [Age, setAge] = useState('')
    const [radio, setRadio] = useState('')

    let c;


    const calculateBMR = () => {


        if (Age && heightFeet && heightInch && Weight) {

            document.getElementById("bmr_warning").style.display = 'none';
            if (radio === 'male') {
                c = "+5";
            }
            if (radio === 'female') {
                c = "-161";
            }
            if (c === undefined) {
                document.getElementById("bmr_warning").style.display = 'block';
                document.getElementById("bmr_input_warning").innerHTML = "Please Select Gender"
            }

            console.log("calculate post" + Age + ',' + heightFeet + ',' + heightInch + ',' + Weight + ',' + c)
            let bmr = 10 * parseFloat(Weight) + 6.25 * ((parseFloat(heightFeet) * 12 + parseFloat(heightInch)) * 2.54) - 5 * parseFloat(Age) + parseFloat(c);


            document.getElementById('bmr').innerHTML = bmr.toFixed(3)
        }
        else {
            document.getElementById("bmr_warning").style.display = 'block';
            document.getElementById("bmr_input_warning").innerHTML = "Please Put Valid Information"
        }
    }

    const clear = () => {
        document.getElementById('bmr').innerHTML = '';
        document.getElementById("bmr_warning").style.display = 'none';
        setAge('');
        setHeightFeet('');
        setHeightInch('');
        setWeight('');
    }


    return (
        <section className="block h-full p-5">
            <h1 className="text-4xl font-bold mb-10 text-center">Calculate BMR</h1>
            <div className="flex flex-col md:flex-row w-full">
                <div className=" form-control w-full md:w-1/2 flex flex-col p-8 bg-lime-200 rounded-2xl mx-2">

                    <div className="w-full">
                        <label className=" input-group  my-2">
                            <span className="bg-lime-500 w-28 font-semibold">Age</span>
                            <input onChange={(e) => setAge(e.target.value)} value={Age} min="0" id="bmr_age" type="number" placeholder="Years" className="input input-bordered w-full" />
                        </label>

                    </div>

                    <div className=" w-full flex flex-row justify-center items-center">
                        <label className="input-group my-2 w-full">
                            <span className="bg-lime-500 w-24 h-12  font-semibold">Gender</span>
                            <div className="w-full flex flex-row justify-center items-center">
                                <div className="w-full pl-4 flex justify-around">
                                    <div>
                                        <input onChange={(e) => setRadio(e.target.value)} value="male" type="radio" id="bmr_male" name="bmr-gender" />
                                        Male
                                    </div>
                                    <div>
                                        <input onChange={(e) => setRadio(e.target.value)} value='female' type="radio" id="bmr_female" name="bmr-gender" />
                                        Female
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>

                    <div className=" w-full flex flex-row justify-center items-center">
                        <label className="input-group my-2 w-full">
                            <span className=" bg-lime-500 w-26  font-semibold">Height</span>
                            <input value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} min="0" id="bmr_height_feet" type="number" placeholder="feet"
                                className="input input-bordered w-full" />
                            <input value={heightInch} onChange={(e) => setHeightInch(e.target.value)} min="0" max="11" id="bmr_height_inch" type="number" placeholder="inch"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className=" w-full flex flex-row justify-center items-center">
                        <label className="input-group my-2 w-full">
                            <span className="bg-lime-500 w-24 font-semibold">Weight</span>
                            <input value={Weight} onChange={(e) => setWeight(e.target.value)} id="bmr_weight" min="0" type="number" placeholder="kg" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div style={{ display: 'none' }} id="bmr_warning" className="alert alert-error shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span id="bmr_input_warning"></span>
                        </div>
                    </div>
                    <button
                        onClick={calculateBMR}
                        className="btn btn-primary mt-4 px-10 w-full hover:text-white hover:bg-lime-800">Calculate
                    </button>
                    <button
                        onClick={clear}
                        className="btn bg-red-500 text-white border-current text-center mt-10 mx-auto px-10 w-1/5 hover:text-white hover:bg-red-800">Clear
                    </button>
                </div>

                <div id="bmr_result"
                    className="w-full md:w-1/2 p-8 bg-lime-200 rounded-2xl mx-2 mt-6 md:mt-0 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold ">Your BMR: <span id="bmr"
                        className="text-neutral">_</span> Calories/day </h1>

                </div>
            </div>
        </section>
    );
}



export default BMR;