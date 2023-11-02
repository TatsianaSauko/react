import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import ListData from './components/ListData';
import ButtonError from './components/ButtonError';
import Loader from './components/Loader';
import { ItemApi } from './components/types/types';
import animeService from './API/animeService';
import SelectLimit from './components/SelectLimit';
import Pagination from './components/Pagination';

const App: React.FC = () => {
  const [dataInput, setDataInput] = useState<string>(
    localStorage.getItem('state') || ''
  );
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);
  const [lastVisiblePage, setLastVisiblePage] = useState<number>(4001);
  const [dataApi, setDataApi] = useState<ItemApi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = async () => {
    setIsLoading(true);
    const [data, pagination] = await animeService(dataInput, page, limit);
    setDataApi(data);
    setLastVisiblePage(pagination.last_visible_page);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, page]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setDataInput(dataInput.trim());
    localStorage.setItem('state', dataInput);
    getData();
  };

  const changeLimit = (data: number) => {
    setLimit(data);
    setPage(1);
  };

  return (
    <div className="App">
      <ButtonError />
      <span className="head">Anime</span>

      <InputField
        dataInput={dataInput}
        setDataInput={setDataInput}
        handleAdd={handleAdd}
      />
      <SelectLimit value={limit} changeLimit={(data) => changeLimit(data)} />
      {isLoading ? <Loader /> : <ListData prop={dataApi} />}

      <Pagination
        page={page}
        lastVisiblePage={lastVisiblePage}
        setPage={setPage}
      />
    </div>
  );
};

export default App;
