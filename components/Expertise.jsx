"use client";
import "@/styles/expertise.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element,
      {
        opacity: 0,
        clipPath: "inset(0% 100% 0% 0%)",
      },
      {
        opacity: 1,
        clipPath: `inset(0% ${0}% 0% 0%)`,
        duration: 1.5,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="expertise">
        <div className="expertise__top">
          <h1 className="expertise__top__title">My Expertise</h1>
        </div>

        <div className="expertise__mid">
          <h3 className="expertise__mid__subtitle">
            HTML // CSS // Scss // Java // JavaScript // REACT// Node // Express // <span className="next">NEXTJS</span>{" "}
            // Redux // Git // MongoDB // NoSQL <span className="learn">and I'm willing to learn new tech stuff.</span>
          </h3>
          <div ref={ref} className="expertise__mid__text">
            <p>
              I am a computer engineer who is in his senior year. I have a high interest in frontend and web
              development. I am willing to learn and try new things.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
