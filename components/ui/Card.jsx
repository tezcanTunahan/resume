"use client";
import "@/styles/ui/card.scss";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Card({ img, title, desc, tech, link, github }) {
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

  return (
    <div ref={ref} className="card">
      <div className="card--left">
        <div className="card--left__title">
          <a href="">
            <h3>{title}</h3>
          </a>
        </div>
        <p className="card--left__desc">{desc}</p>
        <p className="card--left__tech">{tech}</p>
        <div className="card--left__links">
          <a href={link} target="_blank">
            Live
          </a>
          {github && (
            <a href={github} target="_blank">
              Github
            </a>
          )}
        </div>
      </div>
      <div className="card--right">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 }}
        >
          <Image src={img} alt="" className="card--right__img" />
        </motion.div>
      </div>
    </div>
  );
}
