import React from 'react';
import { ItemApi } from './types/types';
import { Link } from 'react-router-dom';

interface Props {
  prop: ItemApi[];
}

function ListData({ prop }: Props) {
  return (
    <ul className="cards">
      {prop.map((item) => (
        <Link key={item.mal_id} to={`/${item.mal_id}`}>
          <li key={item.mal_id} className="card">
            <div className="card__title">{item.title} </div>
            <img src={item.images.jpg.image_url} />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default ListData;
