export interface ItemApi {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

export interface ResponsePagination {
  items: {
    total: number;
  };
  last_visible_page: number;
}

export interface IError {
  message: string;
}

export interface PropsSelect {
  value: number;
  changeLimit: (data: number) => void;
}

export interface PropsPagination {
  page: number;
  lastVisiblePage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface IAnime {
  title: string;
  title_english: string;
  title_synonyms: string[];
  season: string;
  year: number;
  source: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}
