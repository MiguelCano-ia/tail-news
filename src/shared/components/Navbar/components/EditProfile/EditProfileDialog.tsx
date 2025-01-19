import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { fileUpload } from "@/features/auth/helpers/fileUpload";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { setEditProfile, useAppDispatch } from "@/store";
import { startUpdateProfile } from "@/store/slices/auth/thuks";
import { editProfileSchema } from "./";

interface EditProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type FormFields = z.infer<typeof editProfileSchema>;

export const EditProfileDialog = ({
  open,
  onOpenChange,
}: EditProfileDialogProps) => {
  const dispatch = useAppDispatch();
  const form = useForm<FormFields>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      username: "",
      profilePicture: new DataTransfer().files,
    },
  });

  const fileRef = form.register("profilePicture");

  const onSubmit = async (values: FormFields) => {
    const photoURL: string = values.profilePicture?.[0]
      ? await fileUpload(values.profilePicture[0])
      : "";

    dispatch(startUpdateProfile({ displayName: values.username, photoURL }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 col-span-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
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
                        <Input type="file" {...fileRef} className="mt-5" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button
                    type="submit"
                    onClick={() => dispatch(setEditProfile(false))}
                  >
                    Save changes
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
