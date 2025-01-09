import { Footer } from "@/shared/components/Footer";
import { Navbar } from "@/shared/components/Navbar";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Search", to: "/search" },
];

export const ArticlePageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Navbar navigationRoutes={navigation} />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};
