import "./App.css";
import FruitList from "./components/FruitList/FruitList";
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () => {
    setFruits(fruits.filter((fruit) => fruit.color === "red"));
  };

  const totalPrice = fruits.reduce((acc, fruit) => fruit.price + acc, 0);

  return (
    <div className="App">
      <header className="App-header">
        <h4>Preço total: {totalPrice}</h4>
        <FruitList list={fruits} />
        <button onClick={filterRedFruits}>Mostrar frutas vermelhas</button>
      </header>
    </div>
  );
}

export default App;
