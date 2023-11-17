import backgroundImage from "../../assets/images/Prototype.png";
import "./Results.scss";
import CardList from "../../components/CardList/CardList";
import SortBar from "../../components/SortBar/SortBar";
import results from "../../data/results.json";
import { useEffect, useState } from "react";

const Results = () => {
  const [data, setData] = useState(results);
  const [sortType, setSortType] = useState("id");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        relevance: "id",
        usability: "numStars",
      };
      console.log();
      const sortProperty = types[type];
      const sorted = [...results].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      console.log(sorted);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  const onChangeHandler = (e) => {
    setSortType(e.target.value);
    console.log(e.target);
  };

  return (
    <main className="main">
      <img className="main__background" src={backgroundImage}></img>
      <section className="sort-container">
        <SortBar onChangeHandler={onChangeHandler} />
      </section>
      <article className="card-container">
        <CardList results={data} />
      </article>
    </main>
  );
};

export default Results;
