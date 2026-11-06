import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";

const projects = [
  { name: "Geni", image: "/geni.png", href: "#" },
  { name: "CodeBeater", image: "/codebeater.png", href: "#" },
  { name: "Web E-ecomerce", image: "/ecommerce.png", href: "#" },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-gradient-to-b from-electric to-[#004bbf] lg:h-screen"
    >
      {/* ===== MOBILE / TABLET ===== */}
      <div className="lg:hidden px-6 py-16">
        <Reveal>
          <h2 className="font-rodin text-white text-3xl sm:text-5xl text-center">
            TOP 3 PROJECT
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} name={p.name} image={p.image} href={p.href} />
          ))}
        </Reveal>
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden lg:flex absolute inset-0 items-center justify-center">
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
      </div>
    </section>
  );
}

export default Projects;