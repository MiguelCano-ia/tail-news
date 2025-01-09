import { Result } from "@/store";
import { useNavigate } from "react-router";

export const MostRecentNews = ({
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
      <img
        src={image || "public/imgs/no-image-avaible.jpg"}
        className="min-w-full aspect-square object-cover"
        alt="chica-linda"
      />
      <div className="flex flex-col gap-3">
        <div>{title}</div>
        <div className="flex gap-5">
          <div>By: {authors[0]?.name || "No avaible"}</div>
          <div>|</div>
          <div>
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
