"use client";
import "@/styles/work.scss";
import { motion, useInView, useAnimation, delay } from "framer-motion";
import { useEffect, useRef } from "react";
export default function Work() {
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
    <section id="work" className="work">
      <div className="work__top">
        <h1 className="work__top__title">Work Experiance</h1>
      </div>
      <div className="work__mid">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 }}
        >
          <div className="work__mid__card">
            <h1 className="work__mid__card__title">
              Your Company could be next
            </h1>
            <p className="work__mid__card__text">
              I am looking for teammates with whom I can share my energy and
              motivation if you think the same feel free to connect me.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="work__mid__card">
            <h1 className="work__mid__card__title">
              <a href="https://www.archisacademy.com">Archi's Academy</a>
            </h1>
            <p className="work__mid__card__text">
              I attended a boot camp as a frontend developer at Archi's Academy
              thenks to <a href="https://saksikampus.com/">Saksı Kampüs</a>. I
              was focusing on React and Next.js. Throughout the boot camp, I
              learned the fundamentals of both React and Next.js and gained
              hands-on through practical projects.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="work__mid__card">
            <h1 className="work__mid__card__title">
              <a href="https://www.appcent.mobi">Appcent</a>
            </h1>
            <p className="work__mid__card__text">
              I worked as a front-end developer intern focusing on React and
              Next.js. Throughout the internship, I learned the fundamentals of
              both React and Next.js and gained hands-on experience through
              practical projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
