const animeService = async (
  value: string = '',
  numberPage: number,
  limit: number
): Promise<[undefined, undefined]> => {
  const baseApi: string = ` https://api.jikan.moe/v4/anime?page=${numberPage}&limit=${limit}&q=${value}`;
  const response = await fetch(`${baseApi}`);
  const data = await response.json();
  return [data.data, data.pagination];
};

export default animeService;
