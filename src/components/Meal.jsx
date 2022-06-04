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
      <div className=' max-w-[400px] text-dark'>
        <img className='max-w-[250px] mx-auto' src={imageUrl} alt='recipe' />
        <div className='h-auto mb-6'>
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

          <a className='bg-green text-white px-3 py-3  ' href={meal.sourceUrl}>
            Go to recipe
          </a>
        </div>
      </div>
    </>
  );
};
