import { projects } from "@/app/utils/constants";
import { Card } from "../Card/Card";
import "./Projects.scss";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="section__text">
        <h1 className="section__text--header">Projects</h1>
        <h3 className="section__text--secondary">Things I’ve built so far</h3>
      </div>
      <div className="card-container">
        {projects.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
};
