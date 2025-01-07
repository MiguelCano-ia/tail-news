import { Footer } from "@/shared/components/Footer";
import { Navbar } from "@/shared/components/Navbar";
import React from "react";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Search", to: "" },
];

export const SearchPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar navigationRoutes={navigation} />
        {children}
        <Footer />
      </div>
    </>
  );
};
