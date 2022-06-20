import { useSelector } from 'react-redux';

import { Meal } from './Meal';

export const DayMealList = () => {
  const { meals } = useSelector((state) => state.plan);
  const nutrients = meals.nutrients;

  return meals.length === 0 ? null : (
    <>
      <section
        className={
          meals
            ? 'max-w-[1000px] h-full mx-auto flex items-start  flex-col justify-center'
            : 'max-w-[1000px] h-full mx-auto flex flex-col items-center justify-center text-center'
        }
      >
        <h1 className='text-2xl font-bold text-dark mx-auto py-4'>
          Day meal plan
        </h1>
        {/* Container */}
        <div className='flex flex-cols  my-5 mx-auto md:flex-row'>
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

        <section className='max-w-[1000px] mb-8 grid  grid-cols-1 gap-8 mx-auto   items-center text-primary sm:grid-cols-2 md:grid-cols-3'>
          {/* Day plan container */}
          {meals.meals.map((meal) => {
            return <Meal key={meal.id} meal={meal} />;
          })}
        </section>
      </section>
    </>
  );
};
