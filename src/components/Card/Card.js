import "./Card.scss";
import chevron from "../../assets/icons/Chevron.png";

let Card = (props) => {
  const star = "⭐";

  return (
    <li className="card">
      <img
        className="card__image"
        src={props.image}
        alt={`${props.publisher} logo`}
      />
      <div className="card__info">
        <article className="header">
          <h1 className="header__title">{props.name}</h1>
          <div className="header__rating">{star.repeat(props.numStars)}</div>
          <article className="author">
            <p>By&nbsp;</p>
            <h2>{props.publisher}</h2>
          </article>
        </article>
        <article className="body">
          <article className="body__category">
            <h3 className="body__category__name">Price:</h3>
            <h3 className="body__category__name">Downloads:</h3>
            <h3 className="body__category__name">Data Type:</h3>
          </article>
          <article className="body__data">
            <p className="body__data__name">{props.price}</p>
            <p className="body__data__name">{props.downloads}</p>
            <p className="body__data__name">{props.dataType}</p>
          </article>
        </article>
      </div>
      <div className="card__more">
        <p className="card__more__text">More</p>
        <img className="card__more__chevron" src={chevron} alt="arrow" />
      </div>
    </li>
  );
};

export default Card;
