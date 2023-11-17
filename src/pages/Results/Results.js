import backgroundImage from "../../assets/images/SearchPrototype.png";
import "./Results.scss";
import CardList from "../../components/CardList/CardList";

const Results = () => {
  return (
    <main className="main">
      <img className="main__background" src={backgroundImage}></img>
      <article className="card-container">
        <CardList />
      </article>
    </main>
  );
};

export default Results;
