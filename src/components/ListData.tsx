import { IDataApi } from '@/types/types';
import Image from 'next/image';


function ListData({ dataApi, handleItemClick }: IDataApi) {
  return (
    <ul className="cards">
      {dataApi && dataApi.length ? (
        dataApi.map((item) => (
          <div key={item.mal_id} onClick={() => handleItemClick(item)}>
            <li key={item.mal_id} className="card">
              <div className="card__title">{item.title} </div>
              <Image
                src={item.images.jpg.image_url}
                alt={item.title}
                width={270}
                height={380}
                priority
              /> 
            </li>
          </div>
        ))
      ) : (
        <li className="no-found">Nothing found</li>
      )}
    </ul>
  );
}

export default ListData;
