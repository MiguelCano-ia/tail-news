import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/store";

export function AvatarDemo() {
  const { displayName, photoURL } = useAppSelector((state) => state.auth);

  return (
    <Avatar>
      <AvatarImage src={photoURL ?? ""} alt="profile" />
      <AvatarFallback>
        {displayName?.substring(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
