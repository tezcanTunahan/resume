"use client";
import "@/styles/work.scss";
import WorkCard from "./ui/WorkCard";

export default function Work() {
  return (
    <section className="work">
      <div className="work__top">
        <h1 className="work__top__title">Work Experiance</h1>
      </div>
      <div className="work__mid">
        <WorkCard title="Your company could be next">
          I am looking for teammates with whom I can share my energy and motivation if you think the same feel free to
          connect me.
        </WorkCard>

        <WorkCard title="Archi's Academy" link="https://www.archisacademy.com">
          I attended a boot camp as a frontend developer at Archi's Academy thenks to{" "}
          <a href="https://saksikampus.com/" target="_blank">
            Saksı Kampüs
          </a>
          . I was focusing on React and Next.js. Throughout the boot camp, I learned the fundamentals of both React and
          Next.js and gained hands-on through practical projects.
        </WorkCard>

        <WorkCard title="Appcent" link="https://www.appcent.mobi">
          I worked as a front-end developer intern focusing on React and Next.js. Throughout the internship, I learned
          the fundamentals of both React and Next.js and gained hands-on experience through practical projects.
        </WorkCard>
      </div>
    </section>
  );
}
