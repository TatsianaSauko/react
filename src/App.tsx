import './App.css';
import React from 'react';
import MainPage from './components/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
