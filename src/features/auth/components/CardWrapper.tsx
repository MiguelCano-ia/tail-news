import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "./Header";
import { BackButton } from "./BackButton";

interface CardWrapperProps {
  label: string;
  title: string;
  backButtonRef: string;
  backButtonLabel: string;
  children: React.ReactNode;
}

export const CardWrapper = ({
  label,
  title,
  backButtonRef,
  backButtonLabel,
  children,
}: CardWrapperProps) => {
  return (
    <Card className="xl:w-1/4 md:w-1/2 shadow-md">
      <CardHeader>
        <Header label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonRef} />
      </CardFooter>
    </Card>
  );
};
