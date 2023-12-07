import Image from "next/image";
import "./About.scss";

export const About = () => {
  return (
    <div className="about">
      <span className="about__text">
        Hi 👋, My name is <span className="about__text--color">Yuliia</span> and
        I am Frontend Developer
      </span>
      <Image
        className="about__photo"
        src={"/photo.jpg"}
        alt={"photo"}
        width={349}
        height={349}
      />
    </div>
  );
};
