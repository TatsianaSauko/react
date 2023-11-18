import { DataAnime, Pagination } from '../types/types';
const animeService = async (
  value: string = '',
  numberPage: number,
  limit: number
): Promise<[DataAnime[], Pagination] | undefined> => {
  try {
    const baseApi: string = `https://api.jikan.moe/v4/anime?q=${value}&limit=${limit}&page=${numberPage}`;
    const response = await fetch(`${baseApi}`);

    if (!response.ok) {
      throw Error('Could not fetch that anime');
    }
    const data = await response.json();
    return [data.data, data.pagination];
  } catch (err) {
    console.log(err);
  }
};

export default animeService;
