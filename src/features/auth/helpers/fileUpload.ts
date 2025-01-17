export const fileUpload = async (file: File) => {
  const cloudName = import.meta.env.VITE_CLODINARY_NAME;

  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

  const formData = new FormData();
  formData.append("upload_preset", "tail-news");
  formData.append("file", file);

  try {
    const response = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) return null;

    const cloudResp = await response.json();
    return cloudResp.secure_url;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
