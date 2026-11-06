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
      className="group block w-full bg-blue transition-transform duration-200 hover:-translate-y-[0.8cqw]"
    >
      {/* Area gambar */}
      <div className="relative aspect-[371/438] w-full bg-ink overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover opacity-[20%] transition-[opacity,transform] duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        )}
      </div>

      {/* Label nama */}
      <div className="bg-paper py-[1.2cqw] text-center">
        <span className="font-rodin text-ink text-[1.8cqw]">{name}</span>
      </div>
    </a>
  );
}