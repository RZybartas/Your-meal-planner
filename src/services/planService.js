import axios from 'axios';

//Get day plan
const getDayPlan = async (calories) => {
  const res = await axios.get(
    `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&diet=vegan&targetCalories=${calories}&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  return res.data;
};

//Get week plan
const getWeekPlan = async (calories) => {
  const res = await axios.get(
    `https://api.spoonacular.com/mealplanner/generate?timeFrame=week&diet=vegan&targetCalories=${calories}&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  return res.data;
};

const planService = {
  getDayPlan,
  getWeekPlan,
};

export default planService;
