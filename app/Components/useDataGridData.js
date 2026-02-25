export const useDataGridData = url => {
  const store = useMemo(
    () => {
      return new CustomStore({
        key: "id",
        load: async loadOptions => {
          const response = await fetch(url);
          const result = await response.json();

          return {
            data: result.data,
            totalCount: result.totalCount
          };
        }
      });
    },
    [url]
  );

  return store;
};
