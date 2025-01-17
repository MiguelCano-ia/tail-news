import { ImageWithFallback } from "@/shared/components/ImageWithFallBack";
import { Star } from "lucide-react";
import { uploadFavoriteArticles } from "@/store/slices/thunks";
import { useAppDispatch, useAppSelector } from "@/store";
import { useCallback } from "react";
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
  const { status } = useAppSelector((state) => state.auth);
  const { favoriteArticles } = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleArticleClick = useCallback(() => {
    navigate(`/article-details/${uri}`);
  }, [uri, navigate]);

  const handleFavoriteArticles = () => {
    dispatch(uploadFavoriteArticles({ uri }));
  };

  return (
    <div className="flex gap-3 sm:gap-5 items-center">
      <ImageWithFallback
        src={image}
        fallbackSrc={"/imgs/no-image-avaible.jpg"}
        alt="no-avaible"
        className="w-36 h-32 object-cover flex-shrink-0 cursor-pointer"
        handleArticleClick={handleArticleClick}
      />
      <div className="flex flex-col gap-2">
        <div className="font-medium text-sm line-clamp-3">{title}</div>
        <div className="flex gap-2">
          <div className="text-sm font-semibold hidden sm:block">
            {authors[0]?.name || "No avaible"}
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
