type Props = {
  href: string;
  children: React.ReactNode;
};

export default function SlantButton({ href, children }: Props) {
  return (
    <a
      href={href}
      className="group relative inline-block transition-transform duration-150 ease-out hover:-translate-y-[0.3cqw] hover:-rotate-2"
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-white [clip-path:polygon(0%_0%,100%_-8%,100%_100%,0%_100%)] -translate-y-[0.35cqw] -translate-x-[0.3cqw] transition-all duration-150 group-hover:bg-electric group-hover:-translate-y-[0.6cqw] group-hover:-translate-x-[0.5cqw]"
      />
      <span className="relative block bg-ink px-[1.2cqw] py-[0.6cqw] font-rodin text-white text-[1.4cqw] [clip-path:polygon(0%_14%,100%_0%,100%_100%,0%_100%)] transition-colors duration-150 group-hover:bg-white">
        <span className="inline-block font-rodin text-white text-[1.4cqw] transition-all duration-150 group-hover:scale-110 group-hover:text-ink">
          {children}
        </span>
      </span>
    </a>
  );
}