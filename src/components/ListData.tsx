import React from 'react';
import { ItemApi } from '../components/types/types';

interface Props {
  prop: ItemApi[];
}

function ListData({ prop }: Props) {
  return (
    <ul className="cards">
      {prop.map((item) => (
        <li key={item.mal_id} className="card">
          <div className="card__title">{item.title} </div>
          <img src={item.images.jpg.image_url} />
        </li>
      ))}
    </ul>
  );
}

export default ListData;
