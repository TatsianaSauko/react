import React, { useState, useEffect, createContext } from 'react';
import InputField from '../../components/InputField/InputField';
import ListData from '../../components/ListData/ListData';
import ButtonError from '../../components/ButtonError/ButtonError';
import Loader from '../../components/Loader';
import { ItemApi } from '../../types/types';
import animeService from '../../API/animeService';
import SelectLimit from '../../components/SelectLimit/SelectLimit';
import Pagination from '../../components/Pagination/Pagination';
import { Outlet, useSearchParams, useNavigate } from 'react-router-dom';
interface ISearchContext {
  dataInput: string;
  setDataInput: React.Dispatch<React.SetStateAction<string>>;
  dataApi: ItemApi[];
}
export const SearchContext = createContext<ISearchContext>({
  dataInput: '',
  setDataInput: () => {},
  dataApi: [],
});
const MainPage: React.FC = () => {
  const [searchParams, seatSearchParams] = useSearchParams();
  const [dataInput, setDataInput] = useState<string>(
    localStorage.getItem('state') || searchParams.get('search') || ''
  );
  const [page, setPage] = useState<number>(
    Number(searchParams.get('page')) || 1
  );
  const [limit, setLimit] = useState<number>(
    Number(searchParams.get('limit')) || 5
  );
  const [lastVisiblePage, setLastVisiblePage] = useState<number>(4001);
  const [dataApi, setDataApi] = useState<ItemApi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isClose, setIsClose] = useState<boolean>(false);
  const navigate = useNavigate();
  let rootClasses = 'main';
  const getData = async () => {
    setIsLoading(true);
    const [data, pagination] = await animeService(dataInput, page, limit);
    setDataApi(data);
    setLastVisiblePage(pagination.last_visible_page);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
    seatSearchParams({ search: dataInput, limit: `${limit}`, page: `${page}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, page]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setDataInput(dataInput.trim());
    localStorage.setItem('state', dataInput);
    seatSearchParams({ search: dataInput, limit: `${limit}`, page: `${page}` });
    getData();
  };
  const changeLimit = (data: number) => {
    setLimit(data);
    setPage(1);
  };
  const closePage = () => {
    if (isClose) {
      navigate(-1);
      setIsClose(false);
    }
  };
  if (isClose) {
    rootClasses = 'main overlay';
  } else {
    rootClasses = 'main';
  }
  return (
    <SearchContext.Provider value={{ dataInput, setDataInput, dataApi }}>
      <div className="app">
        <div onClick={closePage}>
          <div className={`${rootClasses}`}>
            {' '}
            <ButtonError />
            <span className="head">Anime</span>
            <InputField handleAdd={handleAdd} />
            <SelectLimit
              value={limit}
              changeLimit={(data) => changeLimit(data)}
            />
            {isLoading ? <Loader /> : <ListData />}
            <Pagination
              page={page}
              lastVisiblePage={lastVisiblePage}
              setPage={setPage}
            />
          </div>
        </div>
        <Outlet context={setIsClose} />
      </div>
    </SearchContext.Provider>
  );
};

export default MainPage;
