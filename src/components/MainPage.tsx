import React from 'react';
import { useState, useEffect } from 'react';
import InputField from './InputField';
import ListData from './ListData';
import ButtonError from './ButtonError';
import Loader from './Loader';
import { ItemApi } from './types/types';
import animeService from '../API/animeService';
import SelectLimit from './SelectLimit';
import Pagination from './Pagination';
import { useNavigate, Outlet } from 'react-router-dom';

const MainPage: React.FC = () => {
  const [dataInput, setDataInput] = useState<string>(
    localStorage.getItem('state') || ''
  );
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [lastVisiblePage, setLastVisiblePage] = useState<number>(4001);
  const [dataApi, setDataApi] = useState<ItemApi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigatePage = useNavigate();
  // const navigateBack = useNavigate();
  // const goBack = () => navigateBack(-1);

  const getData = async () => {
    setIsLoading(true);
    const [data, pagination] = await animeService(dataInput, page, limit);
    setDataApi(data);
    setLastVisiblePage(pagination.last_visible_page);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
    navigatePage(`?page=${page}`);
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
    <div className="app">
      <div className="main">
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
      <Outlet />
    </div>
  );
};

export default MainPage;
