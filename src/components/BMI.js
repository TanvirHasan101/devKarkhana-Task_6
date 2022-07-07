import React from 'react';
import { useState } from 'react';



const BMI = () => {

    const [heightFeet, setHeightFeet] = useState('')
    const [heightInch, setHeightInch] = useState('')
    const [Weight, setWeight] = useState('')






    const calculateBMI = () => {

        if (heightFeet && heightInch && Weight) {
            document.getElementById("bmi_warning").style.display = 'none'
            let totalHeight = (parseFloat((heightFeet * 12)) + parseFloat(heightInch)) * 0.0254;
            let bmi = parseFloat(parseFloat(Weight) / (totalHeight * totalHeight));
            document.getElementById('bmi').innerText = bmi.toFixed(3);

            let categoryBmiText;
            if (bmi < 16) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-red-500 text-center"> 
                SEVER THINNESS
                </span>
                
                `

            }
            else if (16 <= bmi && bmi < 17) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-yellow-500 text-center"> 
                Moderate Thinness
                </span>
                
                `

            }

            else if (17 <= bmi && bmi < 18.5) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-yellow-600 text-center"> 
                Mild Thinness
                </span>
                `

            }
            else if (18.5 <= bmi && bmi < 25) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-primary text-center"> 
            NORMAL
                </span>
                
                `
            }
            else if (25 <= bmi && bmi < 30) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-yellow-500 text-center"> 
               OVER WEIGHT
                </span>
                
                `
            }
            else if (30 <= bmi && bmi < 35) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-red-500 text-center"> 
                OBESE Class I
                </span>
                
                `
            }
            else if (35 <= bmi && bmi < 40) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-red-500 text-center"> 
                OBESE Class II
                </span>
                
                `
            }
            else if (40 <= bmi) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-red-500 text-center"> 
                OBESE Class III
                </span>
                
                `
            }

            document.getElementById("category_bmi").innerHTML = categoryBmiText;
        }

        if (!heightFeet || !heightInch || !Weight) {
            document.getElementById("bmi_warning").style.display = 'block'
        }


    }


    const clearField = () => {
        document.getElementById("bmi_warning").style.display = 'none'
        document.getElementById("category_bmi").style.display = 'none'
        document.getElementById('bmi').innerText = '_'

        setHeightFeet('')
        setHeightInch('')
        setWeight('')

    }

    return (
        <div>
            <div className="block h-full p-10">
                <h1 className="text-4xl font-bold mb-10 text-center">Calculate BMI</h1>
                <div className="flex flex-col md:flex-row w-full">
                    <div className=" form-control w-full md:w-1/2 flex flex-col p-8 bg-lime-200 rounded-2xl mx-2">

                        <div className=" w-full flex flex-row justify-center items-center">
                            <label className="input-group my-2 w-full">
                                <span className=" bg-lime-500 w-26  font-semibold">Height</span>
                                <input value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} min="0" type="number" placeholder="feet"
                                    className="input input-bordered w-full" />
                                <input value={heightInch} onChange={(e) => setHeightInch(e.target.value)} min="0" max="11" type="number" placeholder="inch"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className=" w-full flex flex-row justify-center items-center">
                            <label className="input-group my-2 w-full">
                                <span className="bg-lime-500 w-24 font-semibold">Weight</span>
                                <input value={Weight} onChange={(e) => setWeight(e.target.value)}
                                    id="bmi_weight" type="number" placeholder="kg" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div id="bmi_warning" style={{ display: 'none' }} className="alert alert-error shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span id="bmi_input_warning">Please Fill the Form</span>
                            </div>
                        </div>

                        <button
                            onClick={calculateBMI}
                            className="btn btn-primary mt-4 px-10 w-full hover:text-white hover:bg-lime-800"> Calculate
                        </button>
                        <button
                            onClick={clearField}
                            className="btn bg-red-500 text-white border-current text-center mt-10 mx-auto px-10 w-1/5 hover:text-white hover:bg-red-800">Clear
                        </button>
                    </div>

                    <div id="bmi_result"
                        className="w-full md:w-1/2 p-8 bg-lime-200 rounded-2xl mx-2 mt-6 md:mt-0 flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold ">Your BMI: <span id="bmi"
                            className="text-neutral">_</span> kg/m<sup>2</sup> </h1>
                        <span id="category_bmi"></span>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default BMI;