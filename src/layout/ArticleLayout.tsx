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
      <div className="flex justify-between flex-col min-h-screen">
        <Navbar navigationRoutes={navigation} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
