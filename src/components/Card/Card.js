import "./Card.scss";
import chevron from "../../assets/icons/Chevron.png";
import star from "../../assets/icons/Icon.png";

let Card = (props) => {
  return (
    <li className="card">
      <img className="card__image" src={"/"} />
      <div className="card__info">
        <article className="header">
          <h1 className="header__title">{props.name}</h1>
          <img className="header__rating" src={star} />
          <article className="author">
            <p>By&nbsp;</p>
            <h2>{props.company}</h2>
          </article>
        </article>
        <article className="body">
          <article className="body__category">
            <h3 className="body__category__name">Price:</h3>
            <h3 className="body__category__name">Downloads:</h3>
            <h3 className="body__category__name">File Type:</h3>
          </article>
          <article className="body__data">
            <p className="body__data__name">{props.price}</p>
            <p className="body__data__name">{props.downloads}</p>
            <p className="body__data__name">{props.fileType}</p>
          </article>
        </article>
      </div>
      <div className="card__more">
        <p className="card__more__text">More</p>
        <img className="card__more__chevron" src={chevron} />
      </div>
    </li>
  );
};

export default Card;
