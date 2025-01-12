export const Header = ({ label, title }: { label: string; title: string }) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-center">
      <div className="text-2xl font-semibold">{title}</div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
};
