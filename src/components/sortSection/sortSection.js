import Select from "react-dropdown-select";

// const DropdownIndicator = (props) => {
//   return (
//     <components.DropdownIndicator {...props}>
//       <img src={DropdownArrow} alt="Dropdown Toggle" />
//     </components.DropdownIndicator>
//   );
// };

// const code = `<form>
//   <Select
//     options={options}
//     values={[]}
//     required
//     multi
//     name="select"
//     onChange={(value) => console.log(value)}
//   />
//   <button>Send</button>
// </form>`;

let SortSection = () => {
  return (
    <div>
      <select>
        <option value="relevance">Relevance</option>
        <option value="mostRecent">Most Recent Update</option>
        <option value="cleanliness">Cleanliness</option>
      </select>
    </div>
  );
};

export default SortSection;
