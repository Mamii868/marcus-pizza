import { useCartContext } from "../providers/CartProvider";
import type { Pizza, Specialty } from "../types/pizzaTypes";
import Button from "./Button";

const Card = ({ name, toppings, price }: Specialty) => {
  const { addPizzaToCart } = useCartContext();
  const handleAddToCart = () => {
    const pizza: Pizza = {
      crust: { name: "REGULAR" },
      size: { name: "MEDIUM" },
      toppings: toppings.map((topping) => ({ name: topping.name.toUpperCase() })),
    };

    addPizzaToCart(pizza);
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
      <p className="text-lg font-bold">${price.toFixed(2)}</p>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
};

export default Card;
