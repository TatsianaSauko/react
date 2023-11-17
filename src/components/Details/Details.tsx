import React, { useEffect } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { useGetAnimeIdQuery } from '../../store/anime/anime.api';
import Loader from '../Loader/Loader';
import AnimeError from '../../pages/AnimeError/AnimeError';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

const Details: React.FC = () => {
  const setIsClose =
    useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>();
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { isLoadingId } = useAppSelector((state) => state.anime);
  const { data, isError, isFetching } = useGetAnimeIdQuery(id);
  const { changeLoadingId } = useActions();

  const goBack = () => {
    setIsClose(false);
    navigate(-1);
  };

  useEffect(() => {
    changeLoadingId(isFetching);
    setIsClose(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {isError ? (
        <AnimeError />
      ) : isLoadingId ? (
        <Loader />
      ) : (
        data && (
          <div className="card__details">
            <h2>Anime Details for {data.title}</h2>
            <div>Number: {id}</div>
            <div>Title_english: {data.title_english}</div>
            <div>
              Title_synonyms:{' '}
              {data.title_synonyms.map((item, ind) => (
                <div key={ind}>
                  {ind}: {item}
                </div>
              ))}
            </div>
            <div>Season: {data.season}</div>
            <div>Year: {data.year}</div>
            <div>Source: {data.source}</div>
            <img src={data.images.jpg.image_url} alt={data.title} />
            <button className="button__close" onClick={goBack}>
              Close
            </button>
          </div>
        )
      )}
    </>
  );
};

export default Details;
