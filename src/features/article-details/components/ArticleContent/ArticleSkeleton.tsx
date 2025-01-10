import { Skeleton } from "@/components/ui/skeleton";
import { NewsCardSkeleton } from "@/features/home/components";

export const ArticleSkeleton = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
      <div className="flex flex-col gap-1 xl:col-span-2">
        <Skeleton className="h-96 xl:h-full xl:col-span-2" />
      </div>
      <div className="flex flex-col items-start gap-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};
