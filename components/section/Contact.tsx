import React from "react";
import Image from "next/image";
import ContactForm from "../ui/ContactForm";
import FigmaLabel from "../ui/FigmaLabel";
import Reveal from "../ui/Reveal";

function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full h-screen overflow-hidden bg-[#1a1a1a]"
    >
      {/* Pita atas: di belakang foto */}
      <div
        className="absolute inset-0 bg-[#0066ff]"
        style={{ clipPath: "polygon(28.1% 0%, 36.2% 0%, 0% 41.7%, 0% 32.4%)" }}
      />

      {/* Foto + label */}
      <Reveal direction="left" className="absolute inset-0">
        <Image
          src="/fotoku.png"
          alt="Foto Bram"
          width={500}
          height={910}
          className="absolute left-0 bottom-0 w-[31%] h-auto"
        />
        <FigmaLabel
          src="/label-reach.svg"
          alt="You can reach me at"
          left="14.8%" top="22.5%" width="19.5%"
          imgWidth={340} imgHeight={130}
        />
        <FigmaLabel
          src="/label-instagram.svg"
          alt="Instagram"
          href="https://instagram.com/mahesworo_brambang"
          left="17.8%" top="37%" width="16.5%"
          imgWidth={300} imgHeight={110}
        />
        <FigmaLabel
          src="/label-github.svg"
          alt="Github"
          href="https://github.com/Madboksu"
          left="20.8%" top="53.5%" width="16%"
          imgWidth={300} imgHeight={170}
        />
      </Reveal>

      {/* Pita bawah: di depan foto */}
      <div
        className="absolute inset-0 bg-[#0066ff]"
        style={{
          clipPath:
            "polygon(0% 81%, 100% 97.7%, 100% 100%, 70.3% 100%, 0% 88%)",
        }}
      />

      <Reveal
        direction="right"
        className="absolute top-[9%] left-[44.7%]"
      >
        <h2 className="font-rodin text-white text-[3.1cqw]">Contact Me</h2>
      </Reveal>

      <Reveal
        direction="right"
        delay={0.2}
        className="absolute top-[23%] left-[45%] w-[50.1%]"
      >
        <ContactForm />
      </Reveal>
    </section>
  );
}

export default Contact;