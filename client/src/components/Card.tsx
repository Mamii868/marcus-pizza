import type { Topping } from "../types/pizzaTypes";
import Button from "./Button";

interface CardProps {
  title: string;
  toppings: Topping[];
  crust: string;
  price: number;
}

const Card = ({ title, toppings, crust, price }: CardProps) => {
  return (
    <div className="card w-full flex flex-col items-center gap-2 text-center p-2 text-white bg-dark-bg rounded-2xl border border-border">
      <div className="title">
        <h2 className="text-xl font-bold border-b-2 border-orange">{title}</h2>
      </div>
      <p>{crust} Crust</p>
      <div className="toppingList flex flex-col items-center grow">
        {toppings.map((topping, index) => (
          <p className="text-sm text-left w-full" key={index}>- {topping.name}</p>
        ))}
      </div>
      <p className="text-lg font-bold">${price.toFixed(2)}</p>
      <Button text="Add to Cart" />
    </div>
  );
};

export default Card;
