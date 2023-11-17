import backgroundImage from "../../assets/images/SearchPrototype.png";
import "./Results.scss";
import CardList from "../../components/CardList/CardList";
import SortSection from "../../components/SortSection/SortSection";

const Results = () => {
  return (
    <main className="main">
      <img className="main__background" src={backgroundImage}></img>
      <SortSection />
      <article className="card-container">
        <CardList />
      </article>
    </main>
  );
};

export default Results;
