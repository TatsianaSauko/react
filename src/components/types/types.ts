export interface ItemApi {
  mal_id: number;
  title_english: string;
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
