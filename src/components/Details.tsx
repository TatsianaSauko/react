import React from 'react';
import { useParams, useLoaderData, Link } from 'react-router-dom';

const Details: React.FC = () => {
  const { id } = useParams();
  const anime = useLoaderData();

  return (
    <>
      {anime && (
        <div className="card__details">
          <h2>Anime Details for {anime.title}</h2>
          <div>Number: {id}</div>
          <div>Title_english: {anime.title_english}</div>
          <div>
            Title_synonyms:{' '}
            {anime.title_synonyms.map((item, ind) => (
              <div key={ind}>
                {ind}: {item}
              </div>
            ))}
          </div>
          <div>Season: {anime.season}</div>
          <div>Year: {anime.year}</div>
          <div>Source: {anime.source}</div>
          <img src={anime.images.jpg.image_url} alt={anime.title} />
          <Link to="/">
            <button className="button__close">Close</button>
          </Link>
        </div>
      )}
    </>
  );
};

export const animaDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  if (!res.ok) {
    throw Error('Could not fetch that anime');
  }
  const data = await res.json();
  return data.data;
};
export default Details;
