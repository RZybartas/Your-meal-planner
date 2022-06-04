import { useSelector } from 'react-redux';

import { Meal } from './Meal';

export const DayMealList = () => {
  const { meals } = useSelector((state) => state.plan);
  const nutrients = meals.nutrients;

  return meals.length === 0 ? null : (
    <>
      <section className='max-w-[1000px] mx-auto '>
        {/* Container */}
        <h1 className='text-2xl text-dark text-center py-4'>Day meal plan</h1>
        <div className='flex flex-cols max-w-[360px] my-5 mx-auto md:flex-row'>
          <p className='text-dark font-bold ml-3 flex flex-col'>
            Calories <span className='text-purple'>{nutrients.calories}</span>{' '}
            gr
          </p>
          <p className='text-dark font-bold ml-3 flex flex-col'>
            Protein <span className='text-purple'>{nutrients.protein}</span> gr
          </p>
          <p className='text-dark font-bold ml-3 flex flex-col'>
            Carbohydrates
            <span className='text-purple'>{nutrients.carbohydrates}</span> gr
          </p>
          <p className='text-dark font-bold ml-3 flex flex-col'>
            Fat <span className='text-purple'>{nutrients.fat}</span> gr
          </p>
        </div>

        <section className='grid grid-cols-1 mx-auto  gap-3  md:grid-cols-3 md:grid-flow-col'>
          {/* Day plan container */}
          {meals.meals.map((meal) => {
            return <Meal key={meal.id} meal={meal} />;
          })}
        </section>
      </section>
    </>
  );
};
