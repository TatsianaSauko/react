import React, { useState, useEffect } from 'react';
import InputField from '../../components/InputField/InputField';
import ListData from '../../components/ListData/ListData';
import ButtonError from '../../components/ButtonError/ButtonError';
import Loader from '../../components/Loader/Loader';
import SelectLimit from '../../components/SelectLimit/SelectLimit';
import Pagination from '../../components/Pagination/Pagination';
import { Outlet, useSearchParams, useNavigate } from 'react-router-dom';
import { useGetAnimeQuery } from '../../store/anime/anime.api';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import AnimeError from '../AnimeError/AnimeError';

const MainPage: React.FC = () => {
  const { dataInput, limit, page, isLoadingList } = useAppSelector(
    (state) => state.anime
  );

  const { changeLastVisiblePage, changeDataApi, changeLoadingList } =
    useActions();

  const [, seatSearchParams] = useSearchParams();
  const { data, isFetching, isError } = useGetAnimeQuery({
    dataInput,
    limit,
    page,
  });
  // changeLoadingList(isFetching);
  const [isClose, setIsClose] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (data?.data) {
      changeDataApi(data?.data);
    }
    if (data?.lastVisiblePage) {
      changeLastVisiblePage(data?.lastVisiblePage);
    }
    seatSearchParams({ page: `${page}` });
    changeLoadingList(isFetching);
    // changeLoadingList(isFetching);
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
              {isLoadingList ? <Loader /> : <ListData />}
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
