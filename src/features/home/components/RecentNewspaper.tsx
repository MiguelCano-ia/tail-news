import { useAppSelector } from "@/store";

export const RecentNewspaper = () => {
  const { latestNews } = useAppSelector((state) => state.articles);

  const image = latestNews?.image
    ? latestNews.image
    : "public/imgs/images.jpeg";

  return (
    <>
      <div className="font-medium text-lg">Latest news!</div>
      <img
        src={image}
        className="min-w-full aspect-square object-cover"
        alt="chica-linda"
      />
      <div className="flex flex-col gap-3">
        <div>{latestNews?.title}</div>
        <div className="flex gap-5">
          <div>Author: {latestNews?.authors[0]?.name}</div>
          <div>|</div>
          <div>
            {latestNews?.dateTime
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
