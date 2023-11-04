import './components/styles.css';
import React from 'react';
import MainPage from './components/pages/MainPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Details, { animaDetailsLoader } from './components/Details';
import NotFound from './components/pages/NotFound';
import AnimeError from './components/pages/AnimeError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />} errorElement={<AnimeError />}>
      <Route path=":id" element={<Details />} loader={animaDetailsLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
