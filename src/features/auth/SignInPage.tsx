import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "./validations/signIn.schema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardWrapper } from "./components";
import { useAppDispatch } from "@/store";
import { startSignInWithGoogle } from "@/store/slices/auth/thuks";
import { signInWithPasswordAndEmail } from "@/firebase/provider";

export const SignInPage = () => {
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signInSchema>) => {
    signInWithPasswordAndEmail(values);
  };

  const googleSignIn = () => {
    dispatch(startSignInWithGoogle());
  };

  return (
    <CardWrapper
      title="Sign in"
      label="Sign in to your account"
      backButtonRef="/auth/sign-up"
      backButtonLabel="Create an account"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full text-md">
            Sign in
          </Button>
          <Button
            variant="outline"
            type="submit"
            className="w-full text-md pr-10"
            onClick={googleSignIn}
          >
            <img src="/svg/google-icon.svg" alt="google-icon" />
            Google
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
