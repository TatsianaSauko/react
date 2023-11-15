import React, { useState, useEffect } from 'react';
import InputField from '../../components/InputField/InputField';
import ListData from '../../components/ListData/ListData';
import ButtonError from '../../components/ButtonError/ButtonError';
import Loader from '../../components/Loader';
import SelectLimit from '../../components/SelectLimit/SelectLimit';
import Pagination from '../../components/Pagination/Pagination';
import { Outlet, useSearchParams, useNavigate } from 'react-router-dom';
import { useGetAnimeQuery } from '../../store/anime/anime.api';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import AnimeError from '../AnimeError/AnimeError';

const MainPage: React.FC = () => {
  const { dataInput, limit, page } = useAppSelector((state) => state.anime);

  const { changeLastVisiblePage, changeDataApi } = useActions();

  const [, seatSearchParams] = useSearchParams();

  const [isClose, setIsClose] = useState<boolean>(false);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetAnimeQuery({
    dataInput,
    limit,
    page,
  });

  useEffect(() => {
    if (data?.data) {
      changeDataApi(data?.data);
    }
    if (data?.lastVisiblePage) {
      changeLastVisiblePage(data?.lastVisiblePage);
    }
    seatSearchParams({ page: `${page}` });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const closePage = () => {
    if (isClose) {
      navigate(-1);
      setIsClose(false);
    }
  };

  return (
    <>
      {isError ? (
        <AnimeError />
      ) : (
        <div className="app">
          <div onClick={closePage}>
            <div className={`${isClose ? 'main overlay' : 'main'}`}>
              <ButtonError />
              <span className="head">Anime</span>
              <InputField />
              <SelectLimit />
              {isLoading ? <Loader /> : <ListData />}
              <Pagination />
            </div>
          </div>
          <Outlet context={setIsClose} />
        </div>
      )}
    </>
  );
};

export default MainPage;
