import { Article } from "./interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_NEWS_API;

export const newsApi = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://eventregistry.org/api/v1",
  }),
  endpoints: (builder) => {
    return {
      getArticlesByCategory: builder.query<Article, { category: string }>({
        query: ({ category }) => ({
          url: "/article",
          method: "POST",
          body: {
            action: "getArticles",
            articlesPage: 1,
            articlesCount: 10,
            articlesSortBy: "date",
            articlesSortByAsc: false,
            articlesArticleBodyLen: -1,
            categoryUri: `dmoz/${category}`,
            includeArticleCategories: true,
            includeArticleImage: true,
            resultType: "articles",
            forceMaxDataTimeWindow: 31,
            isDuplicateFilter: "skipDuplicates",
            lang: "eng",
            apiKey: apiKey,
          },
        }),
      }),
    };
  },
});

export const { useGetArticlesByCategoryQuery } = newsApi;
