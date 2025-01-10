interface ImageWithFallbackProps {
  src: string | null;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  className,
}: ImageWithFallbackProps) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackSrc;
  };

  return (
    <img
      src={src || fallbackSrc}
      onError={handleError}
      alt={alt}
      className={className}
    />
  );
};
