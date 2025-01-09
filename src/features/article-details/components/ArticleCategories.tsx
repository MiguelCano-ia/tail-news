import { Category } from "@/store";
import { useEffect, useState } from "react";

export const ArticleCategories = ({
  categories,
}: {
  categories: Category[];
}) => {
  const [categoriesArticle, setCategoriesArticle] = useState<string[]>([]);

  useEffect(() => {
    const categoriesUrl = categories?.map(
      (uriLink) => uriLink.uri.split("/")[1]
    );
    const uniqueCategories = Array.from(new Set(categoriesUrl));
    setCategoriesArticle(uniqueCategories);
  }, [categories]);

  return (
    <div className="flex justify-center gap-5 mb-3">
      {categoriesArticle.map((category, index) => (
        <span
          key={index}
          className="text-md  sm:text-lg text-center text-primary font-semibold"
        >
          {category}
        </span>
      ))}
    </div>
  );
};
