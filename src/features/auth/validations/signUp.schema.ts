import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must contain at least 3 character(s)" })
    .max(8, { message: "Username must be at most 8 character(s)" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must contain at least 6 character(s)" })
    .max(255, { message: "Password must be at most 255 character(s)" })
    .regex(/^(?=.*[A-Z])(?=.*[0-9])/, {
      message:
        "Password must have at least one uppercase letter and one number",
    }),
  profilePicture: z
    .instanceof(FileList)
    .optional()
    .refine(
      (file) =>
        file && file.length > 0
          ? [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/webp",
              "image/svg+xml",
            ].includes(file[0].type)
          : true,
      {
        message: "File must be (JPG, JPEG, PNG, WEBP, SVG)",
      }
    )
    .refine(
      (file) =>
        file && file.length > 0 ? file[0].size <= 2 * 1024 * 1024 : true,
      {
        message: "File must be less than 2MB",
      }
    ),
});
