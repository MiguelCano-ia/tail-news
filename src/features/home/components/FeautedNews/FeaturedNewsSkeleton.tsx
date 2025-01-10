import { Skeleton } from "@/components/ui/skeleton";

export const FeaturedNewsSkeleton = () => {
  return (
    <>
      <Skeleton className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:h-[758px] 2xl:w-[758px] aspect-square" />
      <div className="flex flex-col gap-3">
        <Skeleton className="w-[250px] md:w-[500px] xl:w-[600px] 2xl:w-[758px] h-8" />
        <div className="flex gap-5">
          <Skeleton className="w-[50px] md:w-[150px] 2xl:w-[340px] h-5" />
          <Skeleton className="w-[50px] md:w-[150px] 2xl:w-[340px] h-5" />
        </div>
      </div>
    </>
  );
};
