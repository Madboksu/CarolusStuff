import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  href?: string;
  left: string;
  top: string;
  width: string;
  imgWidth: number;
  imgHeight: number;
};

function FigmaLabel({ src, alt, href, left, top, width, imgWidth, imgHeight }: Props) {
  const img = (
    <Image
      src={src}
      alt={alt}
      width={imgWidth}
      height={imgHeight}
      className="w-full h-auto"
    />
  );

  const style = { left, top, width };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute transition-transform hover:scale-105"
        style={style}
      >
        {img}
      </a>
    );
  }

  return (
    <div className="absolute" style={style}>
      {img}
    </div>
  );
}

export default FigmaLabel;