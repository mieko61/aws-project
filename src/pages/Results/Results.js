import backgroundImage from "../../assets/images/SearchPrototype.png";
import "./Results.scss";
import CardList from "../../components/CardList/CardList";

const Results = () => {
  return (
    <main className="main">
      <img className="main__background" src={backgroundImage}></img>
      <CardList />
    </main>
  );
};

export default Results;
