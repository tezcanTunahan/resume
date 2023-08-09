"use client";
import "@/styles/ui/card.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Card({ img, title, desc, tech, link, github }) {
  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    gsap.from(leftRef.current, {
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });
    gsap.from(rightRef.current, {
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="card">
      <div className="card--left" ref={leftRef}>
        <div className="card--left__title">
          <a href={link}>
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
      <div className="card--right" ref={rightRef}>
        <div>
          <Image src={img} alt="" className="card--right__img" />
        </div>
      </div>
    </div>
  );
}
