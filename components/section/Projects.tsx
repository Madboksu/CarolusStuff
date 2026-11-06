import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";

const projects = [
  { name: "Geni", image: "/geni.jpeg", href: "https://github.com/Madboksu/Geni" },
  { name: "CodeBeater", image: "/codebeater.jpeg", href: "" },
  { name: "Web E-ecomerce", image: "/web.jpeg", href: "https://github.com/Madboksu/JeikinanCake-Web" },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-electric to-[#004bbf] flex items-center justify-center"
    >
      <div className="relative aspect-[1920/1080] h-full max-w-full [container-type:inline-size]">
        <Reveal className="absolute top-[3%] w-full text-center">
          <h2 className="font-rodin text-white text-[3.5cqw]">TOP 3 PROJECT</h2>
        </Reveal>

        <Reveal
          delay={0.2}
          className="absolute top-[16%] left-[4%] right-[4%] grid grid-cols-3 gap-[7%]"
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} name={p.name} image={p.image} href={p.href} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;