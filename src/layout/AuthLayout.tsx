import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <div className="w-full">
      <div className="h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};
