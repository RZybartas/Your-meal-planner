import { useSelector } from 'react-redux';

import { Meal } from './Meal';

export const WeekMealList = () => {
  const { weekPlan } = useSelector((state) => state.plan);
  const week = weekPlan.week;

  return (
    <>
      <section className='max-w-[1000px] mx-auto '>
        {/* Container */}
        {week &&
          Object.keys(week).map((day) => (
            <div key={day} className='max-w-[1000px] text-dark  my-3 '>
              <h1 className='text-2xl font-bold text-center py-4'>
                Meal plan for {day}
              </h1>
              <div className='flex flex-cols max-w-[360px] my-5 mx-auto  md:flex-row'>
                <p className='text-dark font-bold ml-3 flex flex-col'>
                  Calories
                  <span className='text-purple'>
                    {week[day].nutrients.calories}
                  </span>
                  gr
                </p>
                <p className='text-dark font-bold ml-3 flex flex-col'>
                  Protein
                  <span className='text-purple'>
                    {week[day].nutrients.protein}
                  </span>
                  gr
                </p>
                <p className='text-dark font-bold ml-3 flex flex-col'>
                  Carbohydrates
                  <span className='text-purple'>
                    {week[day].nutrients.carbohydrates}
                  </span>
                  gr
                </p>
                <p className='text-dark font-bold ml-3 flex flex-col'>
                  Fat
                  <span className='text-purple'>{week[day].nutrients.fat}</span>
                  gr
                </p>
              </div>
              <section className='max-w-[1000px] mb-8 grid  grid-cols-1 gap-8 mx-3   items-center text-primary sm:grid-cols-2 md:grid-cols-3'>
                {/* Week plan container */}
                {week &&
                  week[day].meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />;
                  })}
              </section>
            </div>
          ))}
      </section>
    </>
  );
};
