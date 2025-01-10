import { Category } from "@/store";
import { ArticleCategories } from "./ArticleCategories";

interface ArticleHeaderProps {
  title: string;
  categories: Category[];
  authorName: string;
  dateTime: Date;
}

export const ArticleHeader = ({
  title,
  categories,
  authorName,
  dateTime,
}: ArticleHeaderProps) => {
  return (
    <>
      <h1 className="text-xl sm:text-3xl font-bold text-center">{title}</h1>
      <ArticleCategories categories={categories} />
      <hr />
      <div className="text-md font-medium mt-3">
        <span className="font-bold">By:</span> {authorName}
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
    </>
  );
};
