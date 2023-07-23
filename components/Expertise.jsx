"use client";
import "@/styles/expertise.scss";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Expertise() {
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
    <section ref={ref} className="expertise">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
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
          <p className="expertise__mid__text">
            I am a computer engineer who is in his senior year. I have a high
            interest in frontend and web development. I am willing to learn and
            try new things.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
