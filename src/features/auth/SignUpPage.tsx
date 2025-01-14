import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { signUpSchema } from "./validations/signUp.schema";
import { starSignUpWithEmailAndPassword } from "@/store/slices/auth/thuks";
import { useAppDispatch, useAppSelector } from "@/store";
import { fileUpload } from "./helpers/fileUpload";

export const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.auth);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      profilePicture: new DataTransfer().files,
    },
  });

  const fileRef = form.register("profilePicture");

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    const photoURL: string | null = values.profilePicture?.[0]
      ? await fileUpload(values.profilePicture[0])
      : null;
    dispatch(
      starSignUpWithEmailAndPassword({
        ...values,
        displayName: values.username,
        photoURL,
      })
    );
  };

  return (
    <CardWrapper
      title="Sign up"
      label="create your account"
      backButtonRef="/auth/sign-in"
      backButtonLabel="Sign in"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="johndoe"
                    disabled={status === "checking"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    disabled={status === "checking"}
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
                  <Input
                    type="password"
                    placeholder="*********"
                    {...field}
                    disabled={status === "checking"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profilePicture"
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field }) => (
              <FormItem>
                <FormLabel>Avatar (optional)</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    {...fileRef}
                    className="mt-5"
                    disabled={status === "checking"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full text-md"
            disabled={status === "checking"}
          >
            Sign up
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
