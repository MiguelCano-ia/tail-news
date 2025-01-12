import { useAppSelector } from "@/store";
import { News } from "./components/News";
import { HomeLayout } from "@/layout/HomeLayout";

export const HomePage = () => {
  const { category } = useAppSelector((state) => state.articles);

  return (
    <HomeLayout>
      <div className="grid grid-cols-1 container m-auto lg:grid-cols-2 gap-x-5 gap-y-20 pt-16 max-sm:px-5">
        <News category={category} />
      </div>
    </HomeLayout>
  );
};
