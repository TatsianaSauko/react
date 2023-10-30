import { ItemApi } from '../model';

const characterService = async (value: string | null): Promise<ItemApi[]> => {
  let response;
  if (value) {
    response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}&page=1`
    );
  } else {
    response = await fetch(`https://rickandmortyapi.com/api/character/`);
  }
  const data = await response.json();
  return data.results;
};

export default characterService;
