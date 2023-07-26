"use client";
import "@/styles/expertise.scss";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const animateTyping = () => {
    controls.start({
      opacity: 1,
      clipPath: `inset(0% ${0}% 0% 0%)`,
      transition: { duration: 1.5 },
    });
  };

  useEffect(() => {
    if (isInView) {
      animateTyping();
    } else {
      controls.start({
        opacity: 0,
        clipPath: "inset(0% 100% 0% 0%)",
      });
    }
  }, [isInView]);

  return (
    <section>
      <div className="expertise">
        <div className="expertise__top">
          <h1 className="expertise__top__title">My Expertise</h1>
        </div>

        <div className="expertise__mid">
          <h3 className="expertise__mid__subtitle">
            HTML // CSS // Scss // Java // JavaScript // REACT// Node // Express
            // <span style={{ color: "#adff2f" }}>NEXTJS</span> // Redux // Git
            // MongoDB // NoSQL{" "}
            <span style={{ color: "grey" }}>
              and I'm willing to learn new tech stuff.
            </span>
          </h3>
          <div className="expertise__mid__text">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }}
              animate={controls}
              style={{ fontFamily: "Arial", fontSize: 24, lineHeight: 1.6 }}
            >
              I am a computer engineer who is in his senior year. I have a high
              interest in frontend and web development. I am willing to learn
              and try new things.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
