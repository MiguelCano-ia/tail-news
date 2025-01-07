interface NewsCardProps {
  image: string | null;
  title: string;
  authors: {
    name: string;
  }[];
  dateTime: Date;
}

export const NewsCard = ({
  image,
  title,
  authors,
  dateTime,
}: NewsCardProps) => {
  return (
    <div className="flex items-center gap-5">
      <img
        src={image}
        className="w-36 h-32 object-cover flex-shrink-0"
        alt="chica-linda"
      />
      <div className="flex flex-col gap-2">
        <div>{title}</div>
        <div className="flex gap-5">
          <div>Athor: {authors[0]?.name}</div>
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
