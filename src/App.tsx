import './components/styles.css';
import React from 'react';
import MainPage from './pages/MainPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Details, { animeDetailsLoader } from './components/Details';
import NotFound from './pages/NotFound';
import AnimeError from './pages/AnimeError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />} errorElement={<AnimeError />}>
      <Route path=":id" element={<Details />} loader={animeDetailsLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
