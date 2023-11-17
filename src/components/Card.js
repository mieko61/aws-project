import "./Card.scss";
import { chevron } from "../assets/icons/Chevron.png";

let Card = () => {
  return (
    <div className="card">
      <img className="card__image" src={"/"} />
      <div className="card__info">
        <article className="header">
          <h1 className="header__title">Data Title</h1>
          <img className="header__rating" src={"/"} />
          <h2>By author</h2>
        </article>
        <article className="body">
          <article className="body__category">
            <h3 className="category">Price:</h3>
            <h3 className="category">Downloads:</h3>
            <h3 className="category">File Type:</h3>
          </article>
          <article className="body__data">
            <p className="data">Free</p>
            <p className="data">XX,XXX</p>
            <p className="data">File Type</p>
          </article>
        </article>
      </div>
      <div className="card__more">
        <p className="card__more__text">More</p>
        <img className="card__more__chevron" src={chevron} />
      </div>
    </div>
  );
};

export default Card;
