import { Skeleton } from "@/components/ui/skeleton";

export function NewsCardSkeleton() {
  return (
    <div className="flex gap-5 lg:gap-10 items-center">
      <Skeleton className="sm:h-28 sm:w-32 w-28 h-24 rounded-xl flex-shrink-0" />
      <div className="flex flex-col gap-5">
        <Skeleton className="h-4 lg:w-52 w-36" />
        <div className="flex gap-2">
          <Skeleton className="h-4 lg:w-48 w-32" />
        </div>
      </div>
    </div>
  );
}
