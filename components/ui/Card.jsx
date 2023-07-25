"use client";
import "@/styles/ui/card.scss";
import Image from "next/image";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Card({ img, title, desc, tech, link }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="card">
      <div className="card--left">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -500 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 }}
          className="home__top"
        >
          <Image src={img} alt="" className="card--left__img" />
        </motion.div>
      </div>
      <div className="card--right">
        <div className="card--right__title">
          <h3>{title}</h3>
        </div>
        <p className="card--right__desc">{desc}</p>
        <p className="card--right__tech">{tech}</p>
        <a className="card--right__links" href={link}>
          Live
        </a>
        <a href="">Github</a>
      </div>
    </div>
  );
}
