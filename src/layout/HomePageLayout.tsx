import { Footer } from "@/shared/components/Footer";
import { Navbar } from "@/shared/components/Navbar";

const navigation = [
  { name: "Home", to: "" },
  { name: "Business", to: "business" },
  { name: "Lifestyle", to: "lifestyle" },
  { name: "Technology", to: "technology" },
  { name: "Sports", to: "sports" },
  { name: "Search", to: "search" },
];

export const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
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
