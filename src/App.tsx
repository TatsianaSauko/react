import './components/styles.css';
import React from 'react';
import MainPage from './components/MainPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Details from './components/Details';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route path=":id" element={<Details />} />
    </Route>
  )
);
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
