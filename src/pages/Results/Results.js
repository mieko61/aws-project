import Card from "../../components/Card";
import backgroundImage from "../../assets/images/SearchPrototype.png";
import "./Results.scss";

const Results = () => {
  return (
    <main className="main">
      <img className="main__background" src={backgroundImage}></img>
      <div className="card-container">
        <Card />
      </div>
    </main>
  );
};

export default Results;
