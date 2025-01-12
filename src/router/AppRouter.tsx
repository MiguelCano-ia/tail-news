import { ArticleLayout } from "@/layout/ArticleLayout";
import { ArticlePage, HomePage, SearchPage } from "@/features";
import { AuthLayout } from "@/layout/AuthLayout";
import { Navigate, Route, Routes } from "react-router";
import { SignInPage, SignUpPage } from "@/features/auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>

        <Route path="/" element={<HomePage />}>
          <Route path=":category" element={<HomePage />} />
        </Route>

        <Route path="article-details" element={<ArticleLayout />}>
          <Route path=":articleUri" element={<ArticlePage />} />
        </Route>

        <Route path="search" element={<SearchPage />} />

        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
