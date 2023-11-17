import "./CardList.scss";
import Card from "../Card/Card";
import resultsData from "../../data/sample.json";

let CardList = () => {
  return (
    <article className="cards">
      <ul className="cards-container">
        {resultsData.map((result) => {
          return (
            <Card
              key={result.id}
              name={result.name}
              company={result.company}
              price={result.price}
              downloads={result.downloads}
              filetype={result.fileType}
            />
          );
        })}
      </ul>
    </article>
  );
};

export default CardList;
