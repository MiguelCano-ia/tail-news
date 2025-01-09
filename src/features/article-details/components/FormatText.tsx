export const FormatText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split("\n\n").map((line, index) => (
        <p key={index} className="text-justify">
          {line}
          <br />
          <br />
        </p>
      ))}
    </>
  );
};
