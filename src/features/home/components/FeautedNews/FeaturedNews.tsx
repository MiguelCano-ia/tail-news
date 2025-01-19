import { ImageWithFallback } from "@/shared/components/ImageWithFallBack";
import { Result, useAppDispatch, useAppSelector } from "@/store";
import { uploadFavoriteArticles } from "@/store/slices/thunks";
import { Star } from "lucide-react";
import { useNavigate } from "react-router";

export const FeaturedNews = ({
  mostRecentNews,
}: {
  mostRecentNews: Result;
}) => {
  const { favoriteArticles } = useAppSelector((state) => state.articles);
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { uri, image, title, dateTime, authors } = mostRecentNews;

  const handleFavoriteArticles = () => {
    dispatch(uploadFavoriteArticles({ uri }));
  };

  return (
    <div className="cursor-pointer">
      <ImageWithFallback
        src={image}
        fallbackSrc={"/imgs/no-image-avaible.jpg"}
        alt="no-avaible"
        className="min-w-full aspect-square object-cover cursor-pointer"
        handleArticleClick={() => navigate(`/article-details/${uri}`)}
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
        {status === "authenticated" && (
          <Star
            strokeWidth={0.75}
            className={`cursor-pointer ${
              favoriteArticles.includes(uri) ? "text-yellow-500" : ""
            }`}
            onClick={handleFavoriteArticles}
          />
        )}
      </div>
    </div>
  );
};
