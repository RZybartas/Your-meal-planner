import { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

import logo from '../assets/bd0dcd79757a4c118f03b85b98481d3a.png';
export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <nav className='w-full h-[80px] bg-green flex items-center justify-between text-white text-2xl px-4  '>
      <div>
        <img className='w-20 ' src={logo} alt='meal-planner-logo' />
      </div>
      {/* Menu */}

      <ul className='hidden md:flex '>
        <li>Home</li>
        <li>BMI Calculator</li>
        <li>Meal Planner</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <HiOutlineMenuAlt3 /> : <HiOutlineX />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-green flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>BMI Calculator</li>
        <li className='py-6 text-4xl'>Meal Planner</li>
      </ul>
    </nav>
  );
};
