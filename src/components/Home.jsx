import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

import diet from '../assets/undraw_diet_ghvw.svg';

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col  items-center  justify-center gap-10 h-full md:flex-row'>
        <div>
          <h1 className='text-purple flex justify-center py-3 text-3xl md:text-4xl font-bold my-2'>
            Vegan Meal Planner
          </h1>
          <p className='text-dark flex justify-center text-1xl md:text-3xl text-center max-w-[420px] '>
            Our meal planning software allows you to produce professional and
            beautiful meal plans, including macros and recipes.
          </p>
          <h2 className='text-purple flex justify-center text-2xl md:text-4xl font-bold my-2'>
            Get your meal plan !
          </h2>
        </div>
        <div className='flex flex-col items-center ml-5'>
          <img className='w-80 py-4  ' src={diet} alt='diet-img' />
          <button>
            <Link
              to='planner'
              className='text-purple font-bold group border-2 px-6 py-3 mt-1 flex flex-row items-center'
              smooth={true}
              duration={500}
            >
              Take your plan
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
