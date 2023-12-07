import Image from "next/image";
import "./TechStack.scss";
import { icons } from "@/app/utils/constants";

export const TechStack = () => {
  return (
    <div className="stack">
      <div className="section__text">
        <h1 className="section__text--header">My Tech Stack</h1>
        <h3 className="section__text--secondary">
          Technologies I’ve been working with recently
        </h3>
      </div>
      <div className="stack__icons">
        {Object.entries(icons).map(([key, value]) => (
          <Image src={value} alt={key} key={key} className="stack__icon" />
        ))}
      </div>
    </div>
  );
};
