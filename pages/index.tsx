import { useRef } from 'react';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import { DataAnime, IData } from '../src/types/types';
import InputField from '../src/components/InputField';
import SelectLimit from '../src/components/SelectLimit';
import ListData from '../src/components/ListData';
import Pagination from '../src/components/Pagination';
import Details from '../src/components/Details';
import { MainLayout } from '../src/components/MainLayout';

export default function Home({ data }: IData) {
  const router = useRouter();
  const { search = '', limit = 5, page = 1, detail = null } = router.query;
  const selectedItem = useRef<DataAnime | null>(null);

  const closePage = () => {
    if (detail) {
      selectedItem.current = null;
      router.push(`/?search=${search}&limit=${limit}&page=${page}`);
    }
  };
  const handleItemClick = (item: DataAnime) => {
    if (item) {
      selectedItem.current = item;
      router.push(
        `/?search=${search}&limit=${limit}&page=${page}&detail=${item.mal_id}`
      );
    }
  };
  if (!data) {
    return null;
  }
  return (
    <MainLayout>
      <div className="app">
        <div onClick={closePage}>
          <div className={`${detail ? 'main overlay' : 'main'}`}>
            <span className="head">Anime</span>

            <InputField />

            <SelectLimit
              value={Number(limit)}
              changeLimit={(dataLimit: number) =>
                router.push(
                  `/?search=${search}&limit=${dataLimit}&page=${page}`
                )
              }
            />

            <ListData
              dataApi={data.data}
              handleItemClick={(item) => handleItemClick(item)}
            />

            <Pagination
              page={Number(page)}
              lastVisiblePage={data.pagination.last_visible_page}
              setPage={(newPage: number) =>
                router.push(`/?search=${search}&limit=${limit}&page=${newPage}`)
              }
            />
          </div>
        </div>
        {selectedItem.current && (
          <Details selectedItem={selectedItem.current} closePage={closePage} />
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
