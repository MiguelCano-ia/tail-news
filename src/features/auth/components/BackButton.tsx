import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export const BackButton = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => {
  return (
    <Button variant="link" className="font-normal w-full" size="lg" asChild>
      <Link to={href}>{label}</Link>
    </Button>
  );
};
