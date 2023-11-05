import { Link, useRouteError } from 'react-router-dom';
import { IError } from '../types/types';

export default function AnimeError() {
  const error = useRouteError() as IError;
  return (
    <div className="anime-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
}
