import { axiosClient } from "libs/axios";

export const getRecipes = async ({ minKcal, maxKcal }: any) => {
  try {
    const url = `api.spoonacular.com/recipes/findByNutrients?minCalories=${minKcal}&maxCalories=${maxKcal}&number=1&random=true&apiKey=${process.env.NEXT_PUBLIC_RECIPES_API_KEY}`;
    const response = await axiosClient.get(url);
    return response;
  } catch (e) {
    throw new Error("Failed to fetch...");
  }
};
