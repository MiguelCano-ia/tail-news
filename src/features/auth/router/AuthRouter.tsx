import { Navigate, Route, Routes } from "react-router";
import { SignInPage, SignUpPage } from "../";
import { AuthLayout } from "@/layout/AuthLayout";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>

      <Route path="*" element={<Navigate to={"/auth/sign-in"} />} />
    </Routes>
  );
};
