import { FormatText } from "../FormatText";

export const ArticleBody = ({
  image,
  body,
}: {
  image: string;
  body: string;
}) => {
  return (
    <div className="flex flex-col gap-1 lg:col-span-2">
      <img src={image} alt="no-avaible" className="object-cover mb-5" />
      <div className="">{body ? <FormatText text={body} /> : ""}</div>
    </div>
  );
};
