export interface ArticleRequest {
  action: string;
  articlesPage: number;
  articlesCount: number;
  articlesSortBy: string;
  articlesSortByAsc: false;
  articlesArticleBodyLen: number;
  categoryUri: string;
  includeArticleCategories: boolean;
  includeArticleImage: boolean;
  resultType: string;
  forceMaxDataTimeWindow: number;
  isDuplicateFilter: string;
  lang: string;
  apiKey: string;
}

export interface Article {
  articles: Articles;
}

export interface Articles {
  results: Result[];
  totalResults: number;
  page: number;
  count: number;
  pages: number;
}

export interface Result {
  uri: string;
  lang: Lang;
  isDuplicate: boolean;
  date: Date;
  time: string;
  dateTime: Date;
  dateTimePub: Date;
  dataType: DataType;
  sim: number;
  url: string;
  title: string;
  body: string;
  source: Source;
  authors: Author[];
  categories: Category[];
  image: null | string;
  eventUri: null | string;
  sentiment: number;
  wgt: number;
  relevance: number;
}

export interface Author {
  uri: string;
  name: string;
  type: Type;
  isAgency: boolean;
}

export enum Type {
  Author = "author",
}

export interface Category {
  uri: string;
  label: string;
  wgt: number;
}

export enum DataType {
  News = "news",
}

export enum Lang {
  Eng = "eng",
}

export interface Source {
  uri: string;
  dataType: DataType;
  title: string;
}
