import "./CardList.scss";
import Card from "../Card/Card";
import resultsData from "../../data/results.json";

let CardList = () => {
  return (
    <ul className="cards-list">
      {resultsData.map((result) => {
        return (
          <Card
            key={result.id}
            name={result.name}
            publisher={result.publisher}
            price={result.price}
            downloads={result.downloads}
            dataType={result.dataType}
            numStars={result.numStars}
            image={result.image}
          />
        );
      })}
    </ul>
  );
};

export default CardList;
