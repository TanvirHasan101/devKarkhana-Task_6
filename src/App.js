import './App.css';
import { Routes, Route } from "react-router-dom";
import BMI from './components/BMI';
import BMR from './components/BMR';
import Header from './components/Header';
import IdealWeight from './components/IdealWeight';
import Calorie from './components/Calorie';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className='bg-lime-100 h-screen'>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Welcome></Welcome>} />
        <Route path="/home" element={<Welcome></Welcome>} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/bmr" element={<BMR />} />
        <Route path="/idealweight" element={<IdealWeight></IdealWeight>} />
        <Route path="/calorie" element={<Calorie />} />
      </Routes>


    </div>

  );
}

export default App;
