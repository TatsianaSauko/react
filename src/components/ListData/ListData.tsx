import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../pages/MainPage';

function ListData() {
  const { dataApi } = useContext(SearchContext);
  return (
    <ul className="cards">
      {dataApi.length ? (
        dataApi.map((item) => (
          <Link key={item.mal_id} to={`${item.mal_id.toString()}`}>
            <li key={item.mal_id} className="card">
              <div className="card__title">{item.title} </div>
              <img src={item.images.jpg.image_url} alt={item.title} />
            </li>
          </Link>
        ))
      ) : (
        <li className="no-found">Nothing found</li>
      )}
    </ul>
  );
}

export default ListData;
