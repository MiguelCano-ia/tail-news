import { ImageWithFallback } from "@/shared/components/ImageWithFallBack";
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
      className="flex gap-3 sm:gap-5 cursor-pointer items-center"
      onClick={handleArticleClick}
    >
      <ImageWithFallback
        src={image}
        fallbackSrc={"/imgs/no-image-avaible.jpg"}
        alt="no-avaible"
        className="w-36 h-32 object-cover flex-shrink-0"
      />
      <div className="flex flex-col gap-2">
        <div className="font-medium text-sm line-clamp-3">{title}</div>
        <div className="flex gap-2">
          <div className="text-sm font-semibold hidden sm:block">
            {authors[0]?.name || "No avaibl"}
          </div>
          <div className="hidden sm:block">|</div>
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
