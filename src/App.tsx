import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import ListData from './components/ListData';
import ButtonError from './components/ButtonError';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import { ItemApi } from './model';
import characterService from './API/characterService';

const App: React.FC = () => {
  const [dataInput, setDataInput] = useState<string>(
    localStorage.getItem('state') || ''
  );
  const [dataApi, setDataApi] = useState<ItemApi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getData() {
    setIsLoading(true);
    const data = await characterService(dataInput);
    setDataApi(data);
    setIsLoading(false);
  }
  const handlerAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setDataInput(dataInput.trim());
    localStorage.setItem('state', dataInput);
    getData();
  };

  return (
    <ErrorBoundary>
      <div className="App">
        <ButtonError />
        <span className="head">The Rick and Morty API</span>
        <InputField
          dataInput={dataInput}
          setDataInput={setDataInput}
          handlerAdd={handlerAdd}
        />
        {isLoading ? <Loader /> : <ListData prop={dataApi} />}
      </div>
    </ErrorBoundary>
  );
};

export default App;
