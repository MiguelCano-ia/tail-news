import { ImageWithFallback } from "@/shared/components/ImageWithFallBack";
import { Result } from "@/store";
import { useNavigate } from "react-router";

export const FeaturedNews = ({
  mostRecentNews,
}: {
  mostRecentNews: Result;
}) => {
  const navigate = useNavigate();

  const { uri, image, title, dateTime, authors } = mostRecentNews;

  const handleArticleClick = () => {
    navigate(`/article-details/${uri}`);
  };

  return (
    <div className="cursor-pointer" onClick={handleArticleClick}>
      <ImageWithFallback
        src={image}
        fallbackSrc={"/imgs/no-image-avaible.jpg"}
        alt="no-avaible"
        className="min-w-full aspect-square object-cover"
      />
      <div className="flex flex-col gap-3 mt-5">
        <div className="font-bold text-xl">{title}</div>
        <div className="flex gap-5">
          <div className="font-semibold">
            {authors[0]?.name || "No avaible"}
          </div>
          <div>|</div>
          <div className="font-semibold">
            {dateTime
              ? new Date(dateTime).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
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
