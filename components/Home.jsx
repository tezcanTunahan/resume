import "@/styles/home.scss";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="home">
      <div className="home__top">
        <h1 className="home__top__title">Hi I'm Tunahan</h1>
        <h2 className="home__top__text">
          Software Engineer //{" "}
          <span className="text-animation">Frontend Developer</span>
        </h2>
        <Button text="Download Resume" />
      </div>
      <div className="home__bot">
        <AnimatedText
          text={"SOFTWARE ENGINEER // FRONTEND DEVELOPER // WEB DEVELOPER"}
        />
      </div>
    </div>
  );
}
