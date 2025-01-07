export const RecentNewspaper = () => {
  return (
    <>
      <div className="font-medium text-lg">Latest news!</div>
      <img
        src="/public/imgs/images.jpeg"
        className="min-w-full aspect-square object-cover"
        alt="chica-linda"
      />
      <div className="flex flex-col gap-3">
        <div>VR is the Use of Computer</div>
        <div className="flex gap-5">
          <div>By tu tia</div>
          <div>|</div>
          <div>date</div>
        </div>
      </div>
    </>
  );
};
