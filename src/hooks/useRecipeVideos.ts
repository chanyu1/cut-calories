import { useEffect, useState, useCallback } from 'react';

export const useRecipeVideos = (minKcal: number, maxKcal: number) => {
  const [recipeTitle, setRecipeTitle] = useState<string>('');
  const [videos, setVideos] = useState<Array<object>>([]);

  const fetchData = useCallback((minKcal: number, maxKcal: number) => {
    fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?minCalories=${minKcal}&maxCalories=${maxKcal}&number=1&random=true&apiKey=${process.env.NEXT_PUBLIC_RECIPES_API_KEY}`
    )
      .then((res) => res.json())
      .then((recipe) => {
        // TODO: console.log check, how many called api
        console.log('call', recipe);
        // Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API
        setRecipeTitle(recipe[0].title);
        // FIXME: change maxResults 5
        return fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&type=video&q=${recipe[0].title}&maxResults=1`
        );
      })
      .then((res) => res.json())
      .then((videos) => setVideos(videos.items))
      .catch((e) => alert(`${e.name}: ${e.message}`));
  }, []);

  useEffect(() => {
    fetchData(minKcal, maxKcal);
  }, [fetchData, minKcal, maxKcal]);

  return { recipeTitle, videos, fetchData };
};
