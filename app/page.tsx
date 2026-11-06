import About from "@/components/section/About";
import Projects from "@/components/section/Projects";
import Contact from "@/components/section/Contact";
import LocalFont from "next/font/local";
import Hero from "@/components/section/Hero";

const newRodin = LocalFont({
  src: "./fonts/FOT-NewRodin Pro EB.otf",
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  );
}
