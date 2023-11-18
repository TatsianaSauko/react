import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

function ListData() {
  const { dataApi } = useAppSelector((state) => state.anime);
  const { changeLoadingId } = useActions();

  return (
    <ul className="cards">
      {dataApi.length ? (
        dataApi.map((item) => (
          <Link
            key={item.mal_id}
            to={`${item.mal_id.toString()}`}
            onClick={() => changeLoadingId(true)}
          >
            <li key={item.mal_id} className="card">
              <div className="card__title">{item.title} </div>
              <img src={item.image} alt={item.title} />
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
