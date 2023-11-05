import { ItemApi, ResponsePagination } from '../components/types/types';
const animeService = async (
  value: string = '',
  numberPage: number,
  limit: number
): Promise<[ItemApi[], ResponsePagination]> => {
  const baseApi: string = `https://api.jikan.moe/v4/anime?q=${value}&limit=${limit}&page=${numberPage}`;
  const response = await fetch(`${baseApi}`);
  if (!response.ok) {
    throw Error('Could not fetch that anime');
  }
  const data = await response.json();
  return [data.data, data.pagination];
};

export default animeService;
