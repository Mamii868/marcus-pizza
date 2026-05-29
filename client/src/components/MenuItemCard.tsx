import { useCartContext } from "../providers/CartProvider";
import type { MenuItem } from "../types/orderTypes";
import Button from "./Button";

const MenuItemCard = ({ name, price }: MenuItem) => {
  const { addItemToCart } = useCartContext();
  const handleAddToCart = () => {
    addItemToCart({ name, price });
  };
  return (
    <div className="card w-full flex flex-col items-center gap-2 text-center p-2 text-white bg-dark-lightbg rounded-2xl border border-border">
      <div className="title">
        <h2 className="text-xl font-bold border-b-2 border-orange">{name}</h2>
      </div>
      <p className="text-lg font-bold">${price.toFixed(2)}</p>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
};

export default MenuItemCard;
