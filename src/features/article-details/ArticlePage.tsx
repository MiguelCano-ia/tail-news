import { ArticlePageLayout } from "@/layout/ArticlePageLayout";
import { useGetArticleDetailsQuery } from "@/store";
import { useParams } from "react-router";
import { ArticleCategories, FormatText, RelatedArticles } from "./components";

export const ArticlePage = () => {
  const { articleUri = "" } = useParams();
  const { data: article } = useGetArticleDetailsQuery({ articleUri });

  if (!article) return;
  const { title, authors, body, image, dateTime, categories } = article;
  const keywords = title.split(" ").filter((word) => word.length > 4);

  return (
    <ArticlePageLayout>
      <div className="container m-auto mt-14 mb-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-center">{title}</h1>
          <ArticleCategories categories={categories} />
          <hr />
          <div className="text-md font-medium mt-3">
            <span className="font-bold">By:</span>{" "}
            {authors[0]?.name || "No avaible"}
          </div>
          <div className="text-md font-medium mb-5">
            <span className="font-bold">Updated:</span>{" "}
            {dateTime
              ? new Date(dateTime).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "No date available"}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="flex flex-col gap-1 lg:col-span-2">
            <img
              src={image || "public/imgs/no-image-avaible.jpg"}
              alt="no-avaible"
              className="object-cover mb-5"
            />
            <div className="">{body ? <FormatText text={body} /> : ""}</div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="text-xl font-semibold leading-none">
              Related articles
            </div>
            <RelatedArticles
              keyword={keywords.length > 2 ? keywords.slice(0, 2) : keywords}
            />
          </div>
        </div>
      </div>
    </ArticlePageLayout>
  );
};
