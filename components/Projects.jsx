import "@/styles/projects.scss";
import Card from "@/components/ui/Card";
import hemlock from "@/public/imgs/hemlock.png";
import xox from "@/public/imgs/xox.png";
import sorting from "@/public/imgs/sorting.png";
import currency from "@/public/imgs/currency.png";
import resume from "@/public/imgs/resume.png";
export default function Projects() {
  return (
    <section className="projects">
      <div className="projects__title">
        <h1>Projects</h1>
      </div>
      <div className="projects__proje">
        <Card
          title="Resume"
          img={resume}
          desc="This is my resume website you can download my resume from here"
          link="http://tunahantezcan.com/"
          github="https://github.com/tezcanTunahan/resume"
          tech="REACT//SCSS"
        />
        <Card
          title="CURRENCY CONVERTER"
          img={currency}
          desc="Currency converter app that uses an API to get the latest currency rates."
          link="https://currency-converter-sandy.vercel.app/"
          github="https://github.com/tezcanTunahan/currency_converter"
          tech="REACT//CSS"
        />
        <Card
          title="Hemlock // Blog"
          img={hemlock}
          desc="Hemlcok is a MERN stack app its basically  a blog site you can register // login and write // read and like// dislike blog posts"
          link="https://www.hemlock.blog/"
          tech="REACT//NODE//EXPRESS//MONGODB//SCSS"
        />
        <Card
          title="Sorting // Visualization"
          img={sorting}
          desc="It's basically sorts an array and visualize it"
          link="https://sortvisu.netlify.app/"
          github="https://github.com/tezcanTunahan/sorting"
          tech="REACT//CSS"
        />
        <Card
          title="XOX // Game"
          img={xox}
          desc="It's an XOX game you can play against a computer"
          link="https://tic-tac-toe-olive-pi.vercel.app/"
          github="https://github.com/tezcanTunahan/tic-tac-toe"
          tech="REACT//CSS"
        />
      </div>
    </section>
  );
}
