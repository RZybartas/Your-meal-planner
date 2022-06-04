import { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

export const Bmr = () => {
  const [gender, setGender] = useState(false);
  const [weight, setWeight] = useState(30);
  const [height, setHeight] = useState(120);
  const [age, setAge] = useState(18);
  const [calories, setCalories] = useState(0);

  const handleClick = () => {
    if (gender) {
      setCalories(
        Math.round(9.247 * weight + 3.098 * height - 4.33 * age + 447.593)
      );
    } else {
      setCalories(
        Math.round(13.397 * weight + 4.799 * height - 5.677 * age + 88.362)
      );
    }
  };

  const handleReset = () => {
    setHeight(120);
    setWeight(30);
    setAge(18);
    setCalories(0);
  };

  return (
    <div
      name='bmr'
      className='w-full h-screen flex flex-col justify-center items-center mt-2 '
    >
      <h1 className='text-2xl mt-8 text-dark font-bold md:text-3xl md:my-8'>
        Basal Metabolic Rate Calculator
      </h1>
      {/* Container */}
      <div className='w-[300px] border-2 border-green mt-2 md:w-[600px]'>
        {/* Bmr calculator */}
        <div className=' flex flex-col  w-full justify-center items-center text-dark '>
          <label className='my-2 font-bold' htmlFor='gender'>
            I am a
          </label>
          <label htmlFor='toggle-gender' className='flex items-center'>
            Male
            <input
              id='toggle-gender'
              type='checkbox'
              onChange={() => setGender(!gender)}
              className='cursor-pointer h-6 w-12 rounded-full appearance-none bg-white border-2 border-green  transition duration-200 relative mx-4 -z-10 checked:bg-white'
            />
            Female
          </label>
        </div>
        <div className='w-full flex flex-col justify-center items-center text-dark'>
          <label className='my-3 font-bold' htmlFor='range'>
            Current Weight<span className='text-purple mx-3'>{weight}</span>
            kg
          </label>
          <input
            type='range'
            min='30'
            max='250'
            value={weight}
            className=' w-3/4 my-3'
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className='w-full flex flex-col justify-center items-center text-dark'>
          <label className='my-3 font-bold' htmlFor='height'>
            My Height
            <span className='text-purple mx-3'>{height}</span>
            cm
          </label>
          <input
            type='range'
            min='120'
            max='230'
            className=' w-3/4 my-3'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className='w-full flex flex-col justify-center items-center text-dark'>
          <label className='my-3 font-bold' htmlFor='age'>
            My Age
            <span className='text-purple mx-3'>{age}</span>
            years
          </label>
          <input
            type='range'
            min='18'
            max='65'
            className=' w-3/4 my-3'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className='flex justify-between my-7'>
          <button
            className='bg-green text-white w-1/3 my-2 mx-3 py-3'
            onClick={handleClick}
          >
            Calculate
          </button>
          <button
            className='bg-green text-white w-1/3 my-2 mx-3 py-2'
            type='reset'
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <h2 className='text-dark font-bold flex justify-center '>
          BMR <span className='text-purple mx-3'>{calories}</span> Calories/day
        </h2>

        <div className='flex justify-center'>
          <button className='my-4'>
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
