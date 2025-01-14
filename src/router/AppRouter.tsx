import { AuthRouter, HomeRouter } from "@/features";
import { Route, Routes } from "react-router";
import { useCheckingAuth } from "@/features/auth/hook/useCheckingAuth";

export const AppRouter = () => {
  const { status } = useCheckingAuth();

  return (
    <>
      <Routes>
        <Route path="/*" element={<HomeRouter />}></Route>

        {status === "authenticated" ? (
          <Route path="auth/*" element={<HomeRouter />}></Route>
        ) : (
          <Route path="auth/*" element={<AuthRouter />}></Route>
        )}
      </Routes>
    </>
  );
};
