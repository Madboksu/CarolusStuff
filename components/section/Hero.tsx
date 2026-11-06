import React from "react";
import Image from "next/image";
import SlantButton from "@/components/ui/SlantButton";

function Hero() {
  return (
    <section id="hero" className="relative w-full bg-ink overflow-hidden lg:h-screen">
      {/* ===== MOBILE / TABLET ===== */}
      <div className="lg:hidden relative min-h-screen flex flex-col bg-gradient-to-b from-electric to-[#004bbf] pt-20">
        <div className="hero-left px-6">
          <h1 className="font-rodin text-white text-5xl sm:text-7xl leading-[0.95]">
            Carolus
            <br />
            Bramantyo
          </h1>
          <p className="font-rodin text-white text-base sm:text-xl mt-3">
            I am an unemployed developer.
          </p>
          <div className="hero-up mt-8 flex flex-wrap gap-5">
            <SlantButton href="#about">About me</SlantButton>
            <SlantButton href="#projects">Project</SlantButton>
            <SlantButton href="#contact">Contact</SlantButton>
          </div>
        </div>

        <div className="hero-right mt-auto flex justify-end">
          <Image
            src="/hero-baru.png"
            alt="Carolus Bramantyo"
            width={800}
            height={900}
            priority
            className="w-[75%] sm:w-[55%] h-auto"
          />
        </div>
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden lg:flex absolute inset-0 items-center justify-center overflow-hidden">
        <Image
          src="/hero-bg-baru.png"
          alt=""
          fill
          priority
          className="object-cover z-0"
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative aspect-[16/9] h-full max-w-full">
            <div className="hero-right absolute inset-0">
              <Image
                src="/hero-baru.png"
                alt="Carolus Bramantyo"
                width={800}
                height={900}
                priority
                className="absolute right-[5%] bottom-[-5%] h-[100%] w-auto transition duration-500 ease-in-out origin-bottom hover:scale-105 hover:-skew-x-6 hover:rotate-[-2deg]"
              />
            </div>
          </div>
        </div>

        <Image
          src="/hero-atas-baru.png"
          alt=""
          fill
          className="object-cover z-0 pointer-events-none"
        />
        <Image
          src="/hero-bawah-baru.png"
          alt=""
          fill
          className="object-cover z-10 pointer-events-none"
        />

        <div className="relative z-30 aspect-[16/9] h-full max-w-full [container-type:inline-size]">
          <div className="hero-left absolute left-[6%] top-[38%]">
            <div className="font-rodin text-white text-[6cqw] leading-[0.95] transition duration-500 ease-in-out transform hover:scale-105 hover:-skew-x-12 inline-block">
              <h1>
                Carolus
                <br />
                Bramantyo
              </h1>
              <p className="font-rodin text-white text-[1.6cqw] mt-[0.5cqw]">
                I am an unemployed developer.
              </p>
            </div>
            <div className="hero-up mt-[2cqw] flex gap-[3cqw]">
              <SlantButton href="#about">About me</SlantButton>
              <SlantButton href="#projects">Project</SlantButton>
              <SlantButton href="#contact">Contact</SlantButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;