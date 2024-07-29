import "./css/index.css";
import "./";
import myData from "./data.json";
import cartLogo from "./Assets/images/icon-add-to-cart.svg";
import cakeImg from "./Assets/images/illustration-empty-cart.svg";
import close from "./Assets/images/icon-remove-item.svg";
import decrement from "./Assets/images/icon-decrement-quantity.svg";
import increment from "./Assets/images/icon-increment-quantity.svg";
import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <Dessert />
    </div>
  );
}

function Dessert() {
  const dessert = myData;

  return (
    <>
      <div className="dessert__container">
        <h1>Desserts</h1>
        <DessertContainer
          dessert={dessert}
          // isOpen={isOpen}
          // setIsOpen={setIsOpen}
          // count={count}
          // setCount={setCount}
        />
      </div>

      <ShoppingCart />
    </>
  );
}

function DessertContainer({ dessert }) {
  return (
    <ul className="dessert__box">
      {dessert.map((item) => (
        <DessertComponent key={item.name} dessertObject={item} />
      ))}
    </ul>
  );
}
function DessertComponent({ dessertObject }) {
  const price = dessertObject.price.toFixed(2);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(1);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(1, prevCount - 1, 0));
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <li className="dessert__component">
      <img src={dessertObject.image.desktop} alt={dessertObject.name} />

      <button onClick={handleOpen} className="btn">
        <img className="btnCart" src={cartLogo} alt="cart-logo" />
        &nbsp; &nbsp; &nbsp; Add to Cart
      </button>

      {isOpen && (
        <button className="btn open">
          <img
            src={decrement}
            alt="cart-logo"
            className="btnMinus"
            onClick={handleDecrement}
          />
          {count}
          <img
            onClick={handleIncrement}
            src={increment}
            className="btnAdd"
            alt="cart-logo"
          />
        </button>
      )}

      <span>{dessertObject.category}</span>
      <h3>{dessertObject.name}</h3>
      <p>${price}</p>
    </li>
  );
}

function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <h1>Your Cart (0)</h1>
      <div className="shopping-cart__empty">
        <img src={cakeImg} alt="cart-logo" />
        <p>Your added items will appear here</p>
      </div>

      <div className="shopping-cart__active">
        <ul>
          <li>
            <p> Classic Tiramisu</p>
            <button>
              <img src={close} alt="cart-logo" />
            </button>
            <span>
              <p className="cart1">1x</p>
              <p className="cart2">@ $4.99</p>
              <p className="cart3">$4.99</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
