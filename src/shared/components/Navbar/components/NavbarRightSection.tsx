import { AvatarMenu } from "./Avartar";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "../../DarkModeToggle";
import { Link } from "react-router";
import { useCheckingAuth } from "@/features";

export const NavbarRightSection = () => {
  const { status } = useCheckingAuth();

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
      <DarkModeToggle />
      {status === "authenticated" ? (
        <AvatarMenu />
      ) : (
        <Link to="/auth/sign-in">
          <Button variant="link">Sign in</Button>
        </Link>
      )}
    </div>
  );
};
