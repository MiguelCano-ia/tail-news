import { Article, Result } from "./";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_NEWS_API;

export const newsApi = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://eventregistry.org/api/v1",
  }),
  endpoints: (builder) => {
    return {
      // Tipado de la respuesta transformada
      getArticlesByCategory: builder.query<Result[], { category: string }>({
        query: ({ category }) => ({
          url: "/article",
          method: "POST",
          body: {
            action: "getArticles",
            articlesPage: 1,
            articlesCount: 9,
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
        // Tipado de la respuesta en crudo
        transformResponse: (response: Article) => {
          return response.articles.results;
        },
      }),
    };
  },
});

export const { useGetArticlesByCategoryQuery } = newsApi;
