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
    <div className="flex  gap-5 cursor-pointer" onClick={handleArticleClick}>
      <img
        src={image || "/imgs/no-image-avaible.jpg"}
        className="w-36 h-32 object-cover flex-shrink-0"
        alt="no-avaible"
      />
      <div className="flex flex-col justify-around gap-2">
        <div className="font-medium">{title}</div>
        <div className="flex gap-2">
          <div className="text-sm font-semibold">
            {authors[0]?.name || "No avaible"}
          </div>
          <div>|</div>
          <div className="text-sm font-semibold">
            {dateTime
              ? new Date(dateTime).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "No date available"}
          </div>
        </div>
      </div>
    </div>
  );
};
