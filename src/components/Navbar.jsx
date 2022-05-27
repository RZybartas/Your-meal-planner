import React from 'react';
import logo from '../assets/bd0dcd79757a4c118f03b85b98481d3a.png';
export const Navbar = () => {
  return (
    <nav className='w-full h-[80px] bg-green flex items-center justify-between text-white text-2xl  '>
      <div>
        <img className='w-20 ml-2' src={logo} alt='' />
      </div>
      <ul className='flex flex-row '>
        <li>Home</li>
        <li>BMI Calculator</li>
        <li>Meal Planner</li>
      </ul>
    </nav>
  );
};
