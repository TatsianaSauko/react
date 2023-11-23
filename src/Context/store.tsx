import { MainLayoutProps } from '@/components/MainLayout';
import { ItemApi } from '@/types/types';
import { createContext, useContext, Dispatch, useState } from 'react';

interface ContextProps {
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
  dataApi: ItemApi[];
  setDataApi: Dispatch<React.SetStateAction<ItemApi[]>>;
  isClose: boolean | undefined;
  setIsClose: Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<ContextProps>({
  search: '',
  setSearch: () => {},
  dataApi: [],
  setDataApi: () => {},
  isClose: false,
  setIsClose: () => {},
});

export const GlobalContextProvider = ({ children }: MainLayoutProps) => {
  const [search, setSearch] = useState('');
  const [dataApi, setDataApi] = useState<[] | ItemApi[]>([]);
  const [isClose, setIsClose] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ search, setSearch, dataApi, setDataApi, isClose, setIsClose }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
