import "@/styles/ui/card.scss";
import Image from "next/image";
export default function Card({ img, title, desc, tech, link }) {
  return (
    <div className="card">
      <div className="card--left">
        <Image src={img} alt="" className="card--left__img" />
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
