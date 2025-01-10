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
      {children}
      <Footer />
    </>
  );
};
