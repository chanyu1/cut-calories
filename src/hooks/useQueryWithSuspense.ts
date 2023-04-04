import {
  useQuery,
  QueryFunction,
  QueryKey,
  UseQueryResult,
} from "@tanstack/react-query";

type RequireData<T extends { data: unknown }> = T & {
  data: NonNullable<T["data"]>;
};

type UseQueryWithSuspenseResult<T> = RequireData<UseQueryResult<T, unknown>>;

type FixMeAny = any;

export const useQueryWithSuspense = <T extends unknown>(
  queryKey: QueryKey,
  fetcher: QueryFunction<T>
): UseQueryWithSuspenseResult<T> => {
  return useQuery(queryKey, fetcher, {
    retry: false,
    refetchOnWindowFocus: false,
    suspense: true,
  }) as FixMeAny;
};
