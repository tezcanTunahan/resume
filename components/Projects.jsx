import "@/styles/projects.scss";
import Card from "@/components/ui/Card";
import hemlock from "@/public/imgs/hemlock.png";
import xox from "@/public/imgs/xox.png";
import sorting from "@/public/imgs/sorting.png";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__title">
        <h1>Projects</h1>
      </div>
      <div className="projects__proje">
        <Card
          title="Hemlock // Blog"
          img={hemlock}
          desc="Hemlcok is a MERN stack app its basicly a blog site you can register // login and write // read and like// dislike blog posts"
          link="https://www.hemlock.blog/"
          tech="REACT//NODE//EXPRESS//MONGODB//SCSS"
        />
        <Card
          title="Sorting // Visualization"
          img={sorting}
          desc="It's basically sorts an array and visualize it"
          link="https://sortvisu.netlify.app/"
          tech="REACT//CSS"
        />
        <Card
          title="XOX // Game"
          img={xox}
          desc="It's an XOX game you can play against a computer"
          link="https://tic-tac-toe-olive-pi.vercel.app/"
          tech="REACT//CSS"
        />
      </div>
    </div>
  );
}
