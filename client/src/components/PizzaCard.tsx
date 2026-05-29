import { useEffect, useState } from "react";
import { useCartContext } from "../providers/CartProvider";
import type { Pizza, Size, Specialty } from "../types/pizzaTypes";
import Button from "./Button";
import { getSizes } from "../services/menuService";

interface PizzaCardProps {
  name: Specialty["name"];
  toppings: Specialty["toppings"];
  price: Specialty["price"];
  setPopupVisible?: (visible: boolean) => void;
}

const PizzaCard = ({ name, toppings, price, setPopupVisible }: PizzaCardProps) => {
  const { addPizzaToCart } = useCartContext();
  const [size, setSize] = useState<string>("SMALL");
  const [sizeOptions, setSizeOptions] = useState<Size[]>([]);
  useEffect(() => {
    const fetchSize = async () => {
      // This is really just to get the price of the size since the pizza price is based on a medium pizza
      const data = await getSizes();
      setSizeOptions(data);
    };
    fetchSize();
  }, []);

  const handleAddToCart = () => {
    const pizza: Pizza = {
      crust: { name: "REGULAR" },
      size: { name: size },
      toppings: toppings.map((topping) => ({ name: topping.name.toUpperCase() })),
    };

    addPizzaToCart(pizza);
    if (setPopupVisible) {
      setPopupVisible(false);
    }
  };
  return (
    <div className="card w-full flex flex-col items-center gap-2 text-center p-2 text-white bg-dark-lightbg rounded-2xl border border-border">
      <div className="title">
        <h2 className="text-xl font-bold border-b-2 border-orange">{name}</h2>
      </div>
      <p>Regular Crust</p>
      <div className="toppingList flex flex-col items-center grow">
        {toppings.map((topping, index) => (
          <p className="text-sm text-left w-full" key={index}>
            - {topping.name}
          </p>
        ))}
      </div>
      <div className="sizeSelect flex gap-2">
        {sizeOptions.map((option) => (
          <button
            key={option.name}
            className={`px-2 py-1 rounded ${size === option.name.toUpperCase().split(" ")[0].replace("-", "_") ? "bg-orange border border-orange text-white" : "bg-dark-lightbg text-white border border-orange cursor-pointer hover:bg-darkorange"} transition duration-200 text-sm`}
            onClick={() => setSize(option.name.toUpperCase().split(" ")[0].replace("-", "_"))}>
            {option.name}
          </button>
        ))}
      </div>
      <p className="text-lg font-bold">
        ${(price + (sizeOptions.find((option) => option.name.toUpperCase().split(" ")[0].replace("-", "_") === size)?.price || 0)).toFixed(2)}
      </p>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
};

export default PizzaCard;
