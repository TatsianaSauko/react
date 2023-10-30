import React from 'react';

interface Props {
  prop: ItemApi[];
}

interface ItemApi {
  id: number;
  name: string;
  image: string;
}

function ListData({ prop }: Props) {
  return (
    <ul className="cards">
      {prop.map((item) => (
        <li key={item.id} className="card">
          <div className="card__title">{item.name} </div>
          <img src={item.image} />
        </li>
      ))}
    </ul>
  );
}

export default ListData;
