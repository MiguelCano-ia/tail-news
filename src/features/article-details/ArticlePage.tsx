import {
  ArticleBody,
  ArticleHeader,
  ArticleSkeleton,
  RelatedArticles,
} from "./components";
import { useGetArticleDetailsQuery } from "@/store";
import { useParams } from "react-router";
import { Loading } from "@/shared/components/Loading";

const ArticlePage = () => {
  const { articleUri = "" } = useParams();
  const { data: article, isFetching } = useGetArticleDetailsQuery({
    articleUri,
  });

  if (!article) {
    return (
      <div className="flex flex-col justify-center items-center mt-40 mb-40">
        <Loading />
      </div>
    );
  }

  const { title, authors, body, image, dateTime, categories } = article;
  const keywords = title.split(" ").filter((word) => word.length > 4);

  return (
    <div className="container m-auto mt-14 mb-20 px-5">
      {isFetching ? (
        <ArticleSkeleton />
      ) : (
        <>
          <div className="flex flex-col gap-3">
            <ArticleHeader
              title={title}
              authorName={authors[0]?.name || "No avaible"}
              categories={categories}
              dateTime={dateTime}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <ArticleBody
              image={image || "/public/imgs/no-image-avaible.jpg"}
              body={body}
            />
            <div className="flex flex-col items-start gap-5">
              <RelatedArticles
                uri={articleUri}
                keyword={keywords.length > 2 ? keywords.slice(0, 2) : keywords}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticlePage;
