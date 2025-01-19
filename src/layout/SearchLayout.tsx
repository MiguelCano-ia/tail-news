import { Footer } from "@/shared/components/Footer";
import { Navbar } from "@/shared/components/Navbar";
import React from "react";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Search", to: "" },
];

export const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar navigationRoutes={navigation} />
        <div className="min-h-screen  flex flex-col justify-between mt-10">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};
