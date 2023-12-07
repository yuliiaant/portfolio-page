import "./Card.scss";
import Image from "next/image";
import chain from '../../../public/images/chain.svg';
import github from '../../../public/images/github-small.svg';
import { CardType } from "@/app/utils/types";

type Props = {
card: CardType,
}

export const Card: React.FC<Props> = ({ card }) => {
  const { title, description, stack, demo, code, photo } = card;
  return (
    <div className="card">
      <div className="card__image">
        <Image src={photo} alt="preview" width={324}
        height={260} />
      </div>
      <div className="card__description">
        <div className="card__title">{title}</div>
        <div className="card__about">{description}</div>
        <div className="card__stack"><b>Tech stack</b>: {stack}</div>
        <div className="card__footer">
        <div className="footer-item">
          <Image src={chain} alt="preview" />
          <a href={demo} className="card__link">Live Preview</a>
        </div>
        <div className="footer-item">
        <Image src={github} alt="code" />
        <a href={code} className="card__link">View Code</a>
        </div>
        </div>
      </div>
    </div>
  );
};
