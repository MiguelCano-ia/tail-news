import { ArticlePageLayout } from "@/layout/ArticlePageLayout";
import { useGetArticleDetailsQuery } from "@/store";
import { useParams } from "react-router";

export const ArticlePage = () => {
  const { articleUri = "" } = useParams();

  const { data: Article } = useGetArticleDetailsQuery({ articleUri });
  console.log(Article);

  return (
    <ArticlePageLayout>
      <div></div>
    </ArticlePageLayout>
  );
};
