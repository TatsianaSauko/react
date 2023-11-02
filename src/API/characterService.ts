import { ItemApi } from '../components/types/types';

const characterService = async (value: string | null): Promise<ItemApi[]> => {
  const baseApi: string = `https://rickandmortyapi.com/api/character/`;
  const response = await fetch(`${baseApi}/?name=${value}&page=1`);
  const data = await response.json();
  return data.results;
};

export default characterService;
