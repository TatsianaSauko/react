import './src/components/styles.css';
import React from 'react';
import MainPage from './src/pages/MainPage/MainPage';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Details from './src/components/Details/Details';
import NotFound from './src/pages/NotFound/NotFound';
import AnimeError from './src/pages/AnimeError/AnimeError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />} errorElement={<AnimeError />}>
      <Route path=":id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
