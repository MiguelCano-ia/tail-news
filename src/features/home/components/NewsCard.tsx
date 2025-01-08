import { useNavigate } from "react-router";

interface NewsCardProps {
  uri: string;
  image: string | null;
  title: string;
  authors: {
    name: string;
  }[];
  dateTime: Date;
}

export const NewsCard = ({
  uri,
  image,
  title,
  authors,
  dateTime,
}: NewsCardProps) => {
  const navigate = useNavigate();

  const handleArticleClick = () => {
    navigate(`/article-details/${uri}`);
  };

  return (
    <div
      className="flex items-center gap-5 cursor-pointer"
      onClick={handleArticleClick}
    >
      <img
        src={image || "public/imgs/no-image-avaible.jpg"}
        className="w-36 h-32 object-cover flex-shrink-0"
        alt="chica-linda"
      />
      <div className="flex flex-col gap-2">
        <div>{title}</div>
        <div className="flex gap-5">
          <div>Athor: {authors[0]?.name || "No avaible"}</div>
          <div>|</div>
          <div>
            {dateTime
              ? new Date(dateTime).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                })
              : "No date available"}
          </div>
        </div>
      </div>
    </div>
  );
};
