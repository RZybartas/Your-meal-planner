import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDayPlan, getWeekPlan } from '../features/plan/planSlice';

import { DayMealList } from './DayMealList';
import { WeekMealList } from './WeekMealList';

export const MealPlanner = () => {
  const [calories, setCalories] = useState(2000);
  const [toggle, setToggle] = useState(true);

  const dispatch = useDispatch();
  const { meals, weekPlan } = useSelector((state) => state.plan);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleCalories = (e) => {
    setCalories(e.target.value);
  };

  const getMealPlan = () => {
    if (toggle === true) {
      dispatch(getDayPlan(calories));
    } else if (toggle === false) {
      dispatch(getWeekPlan(calories));
    }
  };

  return (
    <div name='planner' className='w-full h-screen flex  items-start'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto mt-[100px] text-center h-[200px] items-center'>
        <h1 className='text-4xl font-bold text-dark'> Vegan Meal Planner</h1>
        <div>
          <label className='text-dark ' htmlFor='calories'>
            Enter your calories
          </label>
          <input
            type='text'
            value={calories}
            className='border-2 border-purple rounded-full text-dark text-center w-[70px] ml-2 my-3 outline-none'
            onChange={handleCalories}
          />
        </div>
        <div className=' flex flex-col  w-full justify-center items-center text-dark my-5 '>
          {/* Toggle */}
          <label htmlFor='toggle-plan' className='flex items-center'>
            For day
            <input
              id='toggle-plan'
              type='checkbox'
              onChange={handleToggle}
              className='cursor-pointer h-6 w-12 rounded-full appearance-none bg-white border-2 border-green  transition duration-200 relative mx-4 -z-10 checked:bg-white'
            />
            For week
          </label>
        </div>
        <button
          className='bg-green text-white px-6 py-3 my-3'
          onClick={getMealPlan}
        >
          Get your plan
        </button>
        <div className='max-w-[1000px] h-[600px] '>
          {meals && <DayMealList />}
          {weekPlan && <WeekMealList />}
        </div>
      </div>
    </div>
  );
};
