import { Footer } from "@/shared/components/Footer";
import { Navbar } from "@/shared/components/Navbar/Navbar";
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
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};
