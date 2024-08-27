import FoodItems from "./components/fooditems";
import ErrorMessage from "./components/errormessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInputs from "./components/foodinput";
import { useState } from "react";
function App() {
  let [foodItems, setFoodItems] = useState([]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Food Items</h1>
        <FoodInputs handleKeyDown={onKeyDown}></FoodInputs>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
