import Image from "next/image";
import "./Header.scss";
import { Links } from "../Links/Links";

const NAVIGATION = {
  about: "About",
  techStack: "Tech Stack",
  projects: "Projects",
  contact: "Contact",
};

export const Header = () => {
  return (
    <header className="header">
      <Image
        className="header__logo"
        src={"/photo.jpg"}
        alt={"photo"}
        width={80}
        height={80}
      />
      <ul className="header__list">
        {Object.entries(NAVIGATION).map(([key, value]) => (
          <li className="header__item">
            <a className="header__link" href={`#${key}`}>{value}</a>
          </li>
        ))}
        <Links />
      </ul>
    </header>
  );
};
