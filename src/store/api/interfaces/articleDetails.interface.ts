import { Author, Category } from "./article.interface";

export interface ArticleDetails {
  [articleUri: string]: ArticleUri;
}

export interface ArticleUri {
  info: Info;
}

export interface Info {
  uri: string;
  lang: string;
  isDuplicate: boolean;
  date: Date;
  time: string;
  dateTime: Date;
  dateTimePub: Date;
  dataType: string;
  sim: number;
  url: string;
  title: string;
  body: string;
  authors: Author[];
  categories: Category[];
  image: string;
  location: null;
}
