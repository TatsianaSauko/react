import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <div>Page not found!</div>
      <div>
        Go to the <Link to="/">Homepage</Link>.
      </div>
    </>
  );
}
