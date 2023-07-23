"use client";
import "@/styles/home.scss";
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
    <section ref={ref} className="home">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="home__top"
      >
        <h1 className="home__top__title">Hi I'm Tunahan</h1>
        <h2 className="home__top__text">
          Software Engineer //{" "}
          <span className="text-animation">Frontend Developer</span>
        </h2>
        <Button text="Download Resume" onClick={handleDownload} />
      </motion.div>
      <div className="home__bot"></div>
    </section>
  );
}
