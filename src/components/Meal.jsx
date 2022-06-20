import { useEffect, useState } from 'react';

export const Meal = ({ meal }) => {
  const [imageUrl, SetImageUrl] = useState();

  useEffect(() => {
    const getImage = async () => {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
      );
      const data = await res.json();
      SetImageUrl(data.image);
    };
    getImage();
  }, [meal.id]);
  return (
    <>
      <div className=' h-[460px] text-dark border border-purple rounded-lg flex flex-col justify-around'>
        <div className=''>
          <img
            className='max-w-[250px] mx-auto mt-2'
            src={imageUrl}
            alt={meal.title}
          />
          <h1 className='my-2 font-bold text-2xl'>{meal.title}</h1>
          <p>
            Preparation time:
            <span className='text-purple font-bold ml-2'>
              {meal.readyInMinutes} min
            </span>
          </p>
          <p className='my-4 mb-10'>
            Number of servings:
            <span className='text-purple font-bold ml-2  '>
              {meal.servings} servings
            </span>
          </p>
        </div>

        <div className=''>
          <a
            className='bg-green text-white px-3 py-3 mb-3  '
            href={meal.sourceUrl}
          >
            Go to recipe
          </a>
        </div>
      </div>
    </>
  );
};
