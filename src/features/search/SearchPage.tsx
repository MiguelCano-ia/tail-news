import { Input } from "@/components/ui/input";
import { NewsCard } from "../home/components/NewsCard";
import { PaginationComponent } from "@/shared/components/PaginationComponent";
import { SearchPageLayout } from "@/layout/SearchPageLayout";
import { SelectCategory } from "./components/SelectCategory";
import { skipToken } from "@reduxjs/toolkit/query";
import { useAppSelector, useGetArticlesByCategoryQuery } from "@/store";
import { useRef, useState } from "react";

export const SearchPage = () => {
  const { searchCategory } = useAppSelector((state) => state.articles);
  const [search, setSearch] = useState<string | string[]>("");
  const debounce = useRef<NodeJS.Timeout>();
  const [page, setPage] = useState(1);

  const handleSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (debounce.current) {
      clearTimeout(debounce.current);
    }

    debounce.current = setTimeout(() => {
      setSearch(target.value.split(" "));
    }, 300);
  };

  const { data: articles } = useGetArticlesByCategoryQuery(
    search
      ? {
          page,
          keyword: search,
          category: searchCategory,
          sortBy: "date",
          pageCount: 9,
        }
      : skipToken
  );

  const title = searchCategory.split("/")[1];

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <SearchPageLayout>
      <div className="flex flex-col gap-10 justify-center items-center mt-5 mb-14">
        <div className="flex gap-2">
          <SelectCategory />
          <Input
            type="text"
            placeholder="Search category"
            onChange={handleSearch}
          />
        </div>
        <div className="font-bold text-3xl">{title} News</div>
        <div className="px-5 sm:px-20 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-4">
          {articles?.map(({ uri, image, title, authors, dateTime }) => (
            <NewsCard
              key={uri}
              uri={uri}
              image={image}
              title={title}
              authors={authors}
              dateTime={dateTime}
            />
          ))}
        </div>
      </div>
      <div className="mb-12">
        <PaginationComponent
          page={page}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </SearchPageLayout>
  );
};
