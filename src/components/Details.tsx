import { DataAnime } from '@/types/types';
import { useEffect } from 'react';
import { Dispatch } from 'react';
import Image from 'next/image';

interface Props {
  selectedItem: DataAnime;
  setSelectedItem: Dispatch<React.SetStateAction<DataAnime | null>>;
  setIsClose: Dispatch<React.SetStateAction<boolean>>;
}

const Details = ({ selectedItem, setSelectedItem, setIsClose }: Props) => {
  const goBack = () => {
    setIsClose(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    setIsClose(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {selectedItem && (
        <div className="card__details">
          <h2>Anime Details for {selectedItem.title}</h2>
          <div>Number: {selectedItem.mal_id}</div>
          <div>Title_english: {selectedItem.title_english}</div>
          <div>
            Title_synonyms:
            {selectedItem.title_synonyms.map((item, ind) => (
              <div key={ind}>
                {ind}: {item}
              </div>
            ))}
          </div>
          <div>Season: {selectedItem.season}</div>
          <div>Year: {selectedItem.year}</div>
          <div>Source: {selectedItem.source}</div>
          <Image
            src={selectedItem.images.jpg.image_url}
            alt={selectedItem.title}
            width={250}
            height={300}
          />
          <button className="button__close" onClick={goBack}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Details;
