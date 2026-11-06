type Props = {
  text: string;
  href?: string;
  left: string;
  top: string;
  width: string;
  height: string;
  rotate: number;
  fontSize?: string;
};

function SlantLabel({
  text,
  href,
  left,
  top,
  width,
  height,
  rotate,
  fontSize = "1.5cqw",
}: Props) {
  const className =
    "absolute flex items-start justify-start whitespace-nowrap bg-[#0050d5] text-white " +
    "font-rodin pl-[1.6cqw] pt-[0.9cqw] transition-transform";

  const style = {
    left,
    top,
    width,
    height,
    fontSize,
    rotate: `${rotate}deg`,
    // baji: sisi kiri pendek, sisi kanan tebal
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 52%)",
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:scale-105`}
        style={style}
      >
        {text}
      </a>
    );
  }

  return (
    <div className={className} style={style}>
      {text}
    </div>
  );
}

export default SlantLabel;