import "./SortBar.scss";

let sortSection = ({ onChangeHandler }) => {
  return (
    <div className="sort-section">
      <select onChange={(e) => onChangeHandler(e)}>
        <option value="relevance">Relevance</option>
        <option value="mostRecent">Most Recent Update</option>
        <option value="usability">Usability</option>
        <option value="documentation">Documentation</option>
        <option value="size">Size</option>
        <option value="availability">Availability</option>
      </select>
    </div>
  );
};

export default sortSection;
