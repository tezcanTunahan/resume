"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function WorkCard({ title, text, link, children }) {
  const ref = useRef();
  useEffect(() => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
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
    <div ref={ref} className="work__mid__card">
      <h1 className="work__mid__card__title">
        <a href={link} target="_blank">
          {title}
        </a>
      </h1>
      <p className="work__mid__card__text">{children}</p>
    </div>
  );
}
