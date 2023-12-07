import { Links } from "../Links/Links";
import "./Contacts.scss";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__right">
        <h2 className="contacts__name">Yuliia</h2>
        <h2 className="contacts__name">Antonenko</h2>
      </div>
      <div className="contacts__left">
        <a href="tel:+380970899186" className="contacts__phone">
          +380 97 089 91 86
        </a>
        <a
          href="mailto:yuliiia.antonenko@gmail.com"
          className="contacts__email"
        >
          yuliiia.antonenko@gmail.com
        </a>
        <Links />
      </div>
    </div>
  );
};
