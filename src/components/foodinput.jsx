import "../App.css";
const FoodInputs = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Items Here"
      className="inputBox"
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInputs;
