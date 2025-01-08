import { Article, ArticleDetails, Info, Result } from "./";
import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_NEWS_API;

export const newsApi = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://eventregistry.org/api/v1",
  }),
  endpoints: (builder) => {
    return {
      // Tipado de la respuesta transformada
      getArticlesByCategory: builder.query<
        Result[],
        { page?: number; sortBy: string; category: string }
      >({
        query: ({ page = 1, sortBy, category }) => ({
          url: "/article",
          method: "POST",
          body: {
            action: "getArticles",
            articlesPage: page,
            articlesCount: 10,
            articlesSortBy: sortBy,
            articlesArticleBodyLen: -1,
            categoryUri: `dmoz/${category}`,
            includeArticleImage: true,
            includeArticleSentiment: false,
            includeArticleEventUri: false,
            includeArticleBody: false,
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
      getArticleDetails: builder.query<Info, { articleUri: string }>({
        query: ({ articleUri }) => ({
          url: "/article",
          method: "POST",
          body: {
            action: "getArticle",
            articleUri,
            infoArticleBodyLen: -1,
            resultType: "info",
            includeArticleSentiment: false,
            includeArticleEventUri: false,
            includeArticleLocation: true,
            includeSourceTitle: false,
            apiKey: apiKey,
          },
        }),
        transformResponse: (
          response: ArticleDetails,
          _meta: FetchBaseQueryMeta | undefined,
          arg: { articleUri: string }
        ) => {
          return response[arg.articleUri]?.info;
        },
      }),
    };
  },
});

export const { useGetArticlesByCategoryQuery, useGetArticleDetailsQuery } =
  newsApi;
