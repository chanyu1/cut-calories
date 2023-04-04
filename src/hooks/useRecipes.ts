import { getRecipes } from "api/getRecipes";
import { useQueryWithSuspense } from "./useQueryWithSuspense";

export const useRecipes = ({ minKcal, maxKcal }: any) => {
  const fetcher = () => getRecipes({ minKcal, maxKcal });
  const { data } = useQueryWithSuspense(["recipes", minKcal, maxKcal], fetcher);
  return { data };
};
