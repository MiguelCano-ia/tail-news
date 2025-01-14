import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store";
import { useNavigate } from "react-router";

export const BackButton = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => {
  const { status } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <Button
      disabled={status === "checking"}
      variant="link"
      className="font-normal w-full"
      size="lg"
      onClick={() => {
        if (status !== "checking") navigate(href);
      }}
    >
      {label}
    </Button>
  );
};
