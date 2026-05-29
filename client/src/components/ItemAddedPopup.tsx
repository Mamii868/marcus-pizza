import { useEffect, useState } from "react";
import { useCartContext } from "../providers/CartProvider";

const ItemAddedPopup = () => {
  const { cart, cartItemRef } = useCartContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const previousCartItems = cartItemRef.current;
    const currentCartItems = cart.items.length;

    if (cart.items.length > 0) {
      if (currentCartItems > previousCartItems) {
        setIsVisible(true);

        // Hides the popup after 3 seconds
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
        cartItemRef.current = currentCartItems;
        return () => clearTimeout(timer);
      }
    }
  }, [cart, cartItemRef]);
  return (
    // Surely nobody will notice the 0 opacity square in the corner right...?
    <div
      id="addPopup"
      className={`addPopup absolute bottom-12 right-12 w-56 h-16 flex items-center justify-center rounded-2xl bg-green-700 border border-green-500 transition-opacity duration-300 opacity-0 ${isVisible ? "animate-fade-in" : "animate-fade-out"}`}>
      <p className="text-white text-xl font-bold">Item added to cart!</p>
    </div>
  );
};

export default ItemAddedPopup;
