import diet from '../assets/undraw_diet_ghvw.svg';
import { HiArrowNarrowRight } from 'react-icons/hi';

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col  items-center md:flex-row justify-center gap-10 h-full'>
        <div>
          <p className='text-dark flex justify-center text-1xl md:text-3xl text-center max-w-[420px] '>
            Our meal planning software allows you to produce professional and
            beautiful meal plans, including macronutrient and micronutrient
            analysis, a shopping list, recipes, and more.
          </p>
          <h1 className='text-purple flex justify-center text-2xl md:text-4xl font-bold my-2'>
            Get your meal plan !
          </h1>
        </div>
        <div className='flex flex-col items-center ml-5'>
          <img className='w-80 py-4  ' src={diet} alt='diet-img' />
          <button className='text-purple font-bold group border-2 px-6 py-3 mt-1 flex items-center'>
            Take your plan
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
