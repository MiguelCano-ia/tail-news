import { Loading } from "@/shared/components/Loading";
import { Outlet } from "react-router";
import { Suspense } from "react";

export const AuthLayout = () => {
  return (
    <div className="w-full">
      <div className="h-screen flex items-center justify-center">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
