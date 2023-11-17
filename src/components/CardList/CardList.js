import "./CardList.scss";
import Card from "../Card/Card";
import resultsData from "../../data/sample.json";

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
            fileType={result.fileType}
            numStars={result.numStars}
          />
        );
      })}
    </ul>
  );
};

export default CardList;
