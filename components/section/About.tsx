import React from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const aboutText = (
  <>
    Hi, I&apos;m Bram!
    <br />
    I&apos;m an Informatics student based in Surabaya with a strong passion for
    software engineering, UI/UX design, and game development. I focus on
    building intuitive digital experiences from clean user interface designs to
    reliable backend systems and mobile applications. Driven by curiosity, I
    enjoy bridging design thinking and code to craft impactful software
    solutions.
  </>
);

function About() {
  return (
    <section id="about" className="relative w-full bg-ink overflow-hidden lg:h-screen">
      {/* ===== MOBILE / TABLET ===== */}
      <div className="lg:hidden relative min-h-screen flex flex-col bg-gradient-to-b from-ink to-[#003a9e] px-6 pt-16">
        <Reveal>
          <div className="relative">
            <div className="absolute inset-0 bg-paper -rotate-2" />
            <div className="relative bg-gradient-to-br from-electric to-[#003a9e] p-6">
              <p className="font-rodin text-white text-sm sm:text-lg leading-[2]">
                {aboutText}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.2} className="mt-auto flex justify-center">
          <Image
            src="/about-foto.png"
            alt="Carolus Bramantyo"
            width={800}
            height={900}
            className="w-[75%] sm:w-[55%] h-auto"
          />
        </Reveal>
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden lg:flex absolute inset-0 items-center justify-center overflow-hidden">
        <Image src="/about-bg.png" alt="" fill className="object-cover z-0" />

        <div className="relative z-10 aspect-[1920/1080] h-full max-w-full [container-type:inline-size]">
          <Reveal direction="right" delay={0.2} className="absolute inset-0">
            <Image
              src="/about-foto.png"
              alt="Carolus Bramantyo"
              width={800}
              height={900}
              className="absolute right-[0%] bottom-[8%] h-[88%] w-auto"
            />
          </Reveal>

          <Reveal direction="left" className="absolute left-[6%] top-[16%] w-[52%]">
            <div className="absolute inset-0 bg-paper -rotate-2" />
            <div className="relative bg-gradient-to-br from-electric to-[#003a9e] p-[3cqw]">
              <p className="font-rodin text-white text-[1.4cqw] leading-[2.2]">
                {aboutText}
              </p>
            </div>
          </Reveal>
        </div>

        <Image
          src="/rap.png"
          alt=""
          fill
          className="object-cover z-20 pointer-events-none"
        />
      </div>
    </section>
  );
}

export default About;