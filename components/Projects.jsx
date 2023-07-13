import "@/styles/projects.scss";
import Card from "@/components/ui/Card";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__title">
        <h1>Projects</h1>
      </div>
      <div className="projects__proje">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
