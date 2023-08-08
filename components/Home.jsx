"use client";
import "@/styles/home.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { Power3 } from "gsap";
import Button from "@/components/ui/Button";
import { useEffect, useRef } from "react";

export default function Home() {
  const titleRef = useRef();
  const textRef = useRef();
  const iconsRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: Power3.easeOut,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: Power3.easeOut,
      }
    );
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: Power3.easeOut,
      },
      {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 1,
        ease: Power3.easeOut,
      }
    );
    gsap.fromTo(
      iconsRef.current,
      {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: Power3.easeOut,
      },
      {
        delay: 1,
        opacity: 1,
        x: 0,
        duration: 1,
        ease: Power3.easeOut,
      }
    );
  }, []);

  const handleDownload = () => {
    const pdfFileName = "TunahanTezcan.pdf";
    const pdfPath = `/resume/${pdfFileName}`;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfFileName;
    link.click();
  };

  return (
    <section>
      <div className="home">
        <h1 className="home__title" ref={titleRef}>
          Hi I'm Tunahan
        </h1>
        <h2 className="home__text" ref={textRef}>
          Software Engineer // <span className="text-animation">Frontend Developer</span>
        </h2>
        <Button text="Download Resume" onClick={handleDownload} />
        <div className="home__icons" ref={iconsRef}>
          <a href="https://www.linkedin.com/in/tunahan-t-055244211/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/tezcanTunahan" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
