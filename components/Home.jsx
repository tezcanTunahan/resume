"use client";
import "@/styles/home.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Button from "@/components/ui/Button";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  const handleDownload = () => {
    const pdfFileName = "TunahanTezcan.pdf";
    const pdfPath = `/resume/${pdfFileName}`;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfFileName;
    link.click();
  };

  return (
    <section ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
        className="home"
      >
        <h1 className="home__title">Hi I'm Tunahan</h1>
        <h2 className="home__text">
          Software Engineer //{" "}
          <span className="text-animation">Frontend Developer</span>
        </h2>
        <Button text="Download Resume" onClick={handleDownload} />
        <div className="home__icons">
          <a
            href="https://www.linkedin.com/in/tunahan-t-055244211/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/tezcanTunahan" target="_blank">
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
