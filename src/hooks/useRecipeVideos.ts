import { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';

export const useRecipeVideos = (minKcal: number, maxKcal: number) => {
  // TODO: Type
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const dataFetchedRef = useRef(false);

  const fetchData = useCallback((minKcal: number, maxKcal: number) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByNutrients?minCalories=${minKcal}&maxCalories=${maxKcal}&number=1&random=true&apiKey=${process.env.NEXT_PUBLIC_RECIPES_API_KEY}`
      )
      // FIXME: change maxResults 5
      .then((recipe) =>
        axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&type=video&q=${recipe.data[0].title}&maxResults=1`,
          {
            params: { recipeTitle: recipe.data[0].title },
          }
        )
      )
      .then((videos) =>
        setData({
          recipeTitle: videos.config.params.recipeTitle,
          videoContents: videos.data.items,
        })
      )
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData(minKcal, maxKcal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  return { data, isLoading, error, fetchData };
};
