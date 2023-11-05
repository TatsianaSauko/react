import { Link, useRouteError } from 'react-router-dom';

interface IError {
  message: string;
}
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
