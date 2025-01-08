import { useAppSelector } from "@/store";

export const RecentNewspaper = () => {
  const { latestNews } = useAppSelector((state) => state.articles);

  if (!latestNews) return;
  const { image, title, dateTime, authors } = latestNews;

  return (
    <>
      <img
        src={image || "public/imgs/no-image-avaible.jpg"}
        className="min-w-full aspect-square object-cover"
        alt="chica-linda"
      />
      <div className="flex flex-col gap-3">
        <div>{title}</div>
        <div className="flex gap-5">
          <div>Author: {authors[0]?.name || "No avaible"}</div>
          <div>|</div>
          <div>
            {dateTime
              ? new Date(latestNews.dateTime).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                })
              : "No date available"}
          </div>
        </div>
      </div>
    </>
  );
};
