import { ItemApi, ResponsePagination } from '../components/types/types';

const animeService = async (
  value: string = '',
  numberPage: number,
  limit: number
): Promise<[ItemApi[], ResponsePagination]> => {
  const baseApi: string = ` https://api.jikan.moe/v4/anime?page=${numberPage}&sfw&limit=${limit}&q=${value}`;
  const response = await fetch(`${baseApi}`);
  const data = await response.json();
  console.log(data.pagination);
  return [data.data, data.pagination];
};

export default animeService;
