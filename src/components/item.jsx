import css from "./item.module.css";

function Item({ FoodItem, bought, handleBuyButton }) {
  return (
    <li className={`${css["kg-items"]} list-group-item ${bought && "active"} `}>
      <span className={css["kg-span"]}>{FoodItem}</span>
      <button
        className={`${css.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
}
export default Item;
