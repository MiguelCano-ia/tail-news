import { Navigate, Route, Routes } from "react-router";
import { AuthLayout } from "@/layout/AuthLayout";
import { lazy } from "react";

const SignInPage = lazy(() => import("@/features/auth/SignInPage"));
const SignUpPage = lazy(() => import("@/features/auth/SignUpPage"));

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="" element={<AuthLayout />}>
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
      </Route>

      <Route path="*" element={<Navigate to={"/auth/sign-in"} />} />
    </Routes>
  );
};
