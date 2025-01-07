export const RecentNews = () => {
  return (
    <div className="flex items-center gap-5">
      <div>
        <img
          src="/public/imgs/images.jpeg"
          className="w-36 h-32 object-cover"
          alt="chica-linda"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
          tempora dolorum sit omnis ab reiciendis.
        </div>
        <div className="flex gap-5">
          <div>By tu tia</div>
          <div>|</div>
          <div>date</div>
        </div>
      </div>
    </div>
  );
};
