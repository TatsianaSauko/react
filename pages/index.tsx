import { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import { DataAnime, IData } from '@/types/types';
import InputField from '@/components/InputField';
import SelectLimit from '@/components/SelectLimit';
import ListData from '@/components/ListData';
import Pagination from '@/components/Pagination';
import Details from '../src/components/Details';
import { MainLayout } from '../src/components/MainLayout';
import Loading from './Loading';


export default function Home({ data }: IData) {
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const [isClose, setIsClose] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DataAnime | null>(null);
  const [lastVisiblePage, setLastVisiblePage] = useState<number>(4001);

  useEffect(() => {
    router.push(`/?search=${search}&limit=${limit}&page=${page}`);
    if(data.pagination) {
      setLastVisiblePage(data.pagination.last_visible_page)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(search.trim());
    router.push(`/?search=${search}&limit=${limit}&page=${page}`);
  };

  const changeLimit = (dataLimit: number) => {
    setLimit(dataLimit);
    setPage(1);
  };
  const closePage = () => {
    if (isClose) {
      setSelectedItem(null);
      setIsClose(false);
      window.history.pushState(null, '', `/?search=${search}&limit=${limit}&page=${page}`);
    }
  };
  const handleItemClick = (item: DataAnime) => {
    if (item) {
      setSelectedItem(item);
      window.history.pushState(null, '', `/detail/${item.mal_id}`);
    }
  };
  if (!data) {
  return null;
}

  return (
    <MainLayout>
      <div className="app">
        <div onClick={closePage}>
          <div className={`${isClose ? 'main overlay' : 'main'}`}>
            <span className="head">Anime</span>

            <InputField
              search={search}
              setSearch={setSearch}
              handleAdd={handleAdd}
            />

            <SelectLimit
              value={limit}
              changeLimit={(dataLimit: number) => changeLimit(dataLimit)}
            />
            <Suspense fallback={<Loading/>}>
            <ListData
              dataApi={data.data}
              handleItemClick={(item) => handleItemClick(item)}
            />
            </Suspense>
            
            <Pagination
              page={page}
              lastVisiblePage={lastVisiblePage}
              setPage={setPage}
            />
          </div>
        </div>
        {selectedItem && (
          <Details
            selectedItem={selectedItem}
            setIsClose={setIsClose}
            closePage={closePage}
          />
        )}
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ query }: NextPageContext) {
  const search = query.search || '';
  const limit = query.limit || 5;
  const page = query.page || 1;

  const response = await fetch(
    `https://api.jikan.moe/v4/anime?q=${search}&limit=${limit}&page=${page}`
  );

  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
