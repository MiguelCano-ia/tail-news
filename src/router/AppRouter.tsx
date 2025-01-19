import { AuthRouter, HomeRouter } from "@/features";
import { clearErrorMessage, useAppDispatch } from "@/store";
import { Loading } from "@/shared/components/Loading";
import { Route, Routes, useLocation } from "react-router";
import { useCheckingAuth } from "@/features/auth/hook/useCheckingAuth";
import { useEffect } from "react";

export const AppRouter = () => {
  const { status } = useCheckingAuth();
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(clearErrorMessage());
  }, [location]);

  if (status === "checking")
    return (
      <div className="flex h-screen">
        <Loading />
      </div>
    );

  return (
    <>
      <Routes>
        {status === "authenticated" ? (
          <Route path="/*" element={<HomeRouter />}></Route>
        ) : (
          <Route path="auth/*" element={<AuthRouter />}></Route>
        )}
        <Route path="/*" element={<HomeRouter />}></Route>
      </Routes>
    </>
  );
};
