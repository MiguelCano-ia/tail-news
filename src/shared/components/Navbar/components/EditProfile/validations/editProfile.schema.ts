import z from "zod";

export const editProfileSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must contain at least 3 character(s)" })
    .max(8, { message: "Username must be at most 8 character(s)" }),
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
