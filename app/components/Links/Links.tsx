import "./Links.scss";
import Image from "next/image";
import githubIcon from "../../../public/images/github-icon.svg";
import telegramIcon from "../../../public/images/telegram-icon.svg";
import linkedinIcon from "../../../public/images/linkedin-icon.svg";

export const Links = () => {
  return (
    <div className="header__item header__links">
      <a href="/" className="links--github link-item">
        <Image src={githubIcon} alt="github" />
      </a>
      <a href="/" className="links--telegram link-item">
        <Image src={telegramIcon} alt="telegram" />
      </a>
      <a href="/" className="links--linkedin link-item">
        <Image src={linkedinIcon} alt="linkedin" />
      </a>
    </div>
  );
};
