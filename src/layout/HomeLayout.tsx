import { Footer } from "@/shared/components/Footer";
import { Navbar } from "@/shared/components/Navbar";

const navigation = [
  { name: "Home", to: "" },
  { name: "Business", to: "business" },
  { name: "Health", to: "health" },
  { name: "Science", to: "science" },
  { name: "Sports", to: "sports" },
  { name: "Search", to: "search" },
];

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
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
