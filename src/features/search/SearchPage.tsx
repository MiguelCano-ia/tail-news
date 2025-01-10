import { Input } from "@/components/ui/input";
import { SearchList, SelectCategory } from "./components";
import { SearchPageLayout } from "@/layout/SearchPageLayout";
import { useRef, useState } from "react";

export const SearchPage = () => {
  const [search, setSearch] = useState<string | string[]>("");
  const debounce = useRef<NodeJS.Timeout>();

  const handleSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (debounce.current) {
      clearTimeout(debounce.current);
    }

    debounce.current = setTimeout(() => {
      setSearch(target.value.split(" "));
    }, 300);
  };

  return (
    <SearchPageLayout>
      <div className="flex flex-col gap-10 justify-center items-center mt-5 mb-14">
        <div className="flex gap-3 sm:gap-2 max-sm:flex-col">
          <SelectCategory />
          <Input
            type="text"
            placeholder="Search article"
            onChange={handleSearch}
          />
        </div>
        <SearchList search={search} />
      </div>
    </SearchPageLayout>
  );
};
