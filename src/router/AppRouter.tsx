import { ArticlePage, HomePage, SearchPage } from "@/features";
import { DarkModeToggle } from "@/shared/components/DarkModeToggle";
import { Navigate, Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <>
      <DarkModeToggle />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article-details" element={<ArticlePage />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
