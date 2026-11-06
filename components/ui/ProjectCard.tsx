import Image from "next/image";

type Props = {
  name: string;
  image?: string;
  href?: string;
};

export default function ProjectCard({ name, image, href = "#" }: Props) {
  return (
    <a
      href={href}
      className="group block w-full transition-transform duration-200 hover:-translate-y-2 lg:hover:-translate-y-[0.8cqw]"
    >
      <div className="relative aspect-[371/438] w-full bg-ink overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover opacity-60 lg:opacity-[20%] transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-50"
          />
        )}
      </div>

      <div className="bg-paper py-4 lg:py-[1.2cqw] text-center">
        <span className="font-rodin text-ink text-xl lg:text-[1.8cqw]">{name}</span>
      </div>
    </a>
  );
}