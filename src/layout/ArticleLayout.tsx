import { Footer } from "@/shared/components/Footer";
import { Loading } from "@/shared/components/Loading";
import { Navbar } from "@/shared/components/Navbar";
import { Suspense } from "react";
import { Outlet } from "react-router";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Search", to: "/search" },
];

export const ArticleLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <div>
          <Navbar navigationRoutes={navigation} />
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};
