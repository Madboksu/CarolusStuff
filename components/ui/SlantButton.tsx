type Props = {
  href: string;
  children: React.ReactNode;
};

export default function SlantButton({ href, children }: Props) {
  return (
    <a
      href={href}
      className="group relative inline-block transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:-rotate-2 lg:hover:-translate-y-[0.3cqw]"
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-white [clip-path:polygon(0%_0%,100%_-8%,100%_100%,0%_100%)] -translate-y-1 -translate-x-1 transition-all duration-150 group-hover:bg-electric group-hover:-translate-y-1.5 group-hover:-translate-x-1.5 lg:-translate-y-[0.35cqw] lg:-translate-x-[0.3cqw] lg:group-hover:-translate-y-[0.6cqw] lg:group-hover:-translate-x-[0.5cqw]"
      />
      <span className="relative block bg-ink px-4 py-2 font-rodin text-white text-base [clip-path:polygon(0%_14%,100%_0%,100%_100%,0%_100%)] transition-colors duration-150 group-hover:bg-white lg:px-[1.2cqw] lg:py-[0.6cqw] lg:text-[1.4cqw]">
        <span className="inline-block font-rodin text-base transition-all duration-150 group-hover:scale-110 group-hover:text-ink lg:text-[1.4cqw]">
          {children}
        </span>
      </span>
    </a>
  );
}