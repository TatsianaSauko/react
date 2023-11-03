import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainPage from './MainPage';
import Loader from './Loader';

const Details: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //
  const [anime, setAnime] = useState(null);
  const goBack = () => navigate(-2);
  console.log(id);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((res) => res.json())
      .then((data) => setAnime(data.data));
    setIsLoading(false);
  }, [id]);

  return (
    <div className="details__block">
      <div className="overlay" onClick={goBack}>
        <MainPage />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        anime && (
          <div className="card__details">
            <h2>Anime Details for {anime.title}</h2>
            <div>url: {anime.url}</div>
            <div>season: {anime.season}</div>
            <div>year: {anime.year}</div>
            <div>source: {anime.source}</div>
            <img src={anime.images.jpg.image_url} />
            <button className="button__close" onClick={goBack}>
              Close
            </button>
          </div>
        )
      )}
    </div>
  );
};
export default Details;
