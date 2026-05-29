import { createContext, useContext, useState, type ReactNode } from "react";
import type { MenuItem, Order } from "../types/orderTypes";
import { addItem, addPizza, getOrder } from "../services/orderService";
import type { Pizza } from "../types/pizzaTypes";

interface CartProviderProps {
  cart: Order;
  setCart: (cart: Order) => void;
  updateCart: () => void;
  addItemToCart: (item: MenuItem) => Promise<void>;
  addPizzaToCart: (pizza: Pizza) => Promise<void>;
}

const cartContext = createContext<CartProviderProps | undefined>(undefined);

// Allows use of functions and variables across the app
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Order>({
    deliveryMethod: "",
    address: "",
    items: [],
  });

  const updateCart = async () => {
    const cartData = await getOrder();
    setCart(cartData);
  };

  const addItemToCart = async (item: MenuItem) => {
    await addItem(item);
    await updateCart();
  };

  const addPizzaToCart = async (pizza: Pizza) => {
    await addPizza(pizza);
    await updateCart();
  };

  return <cartContext.Provider value={{ cart, setCart, updateCart, addItemToCart, addPizzaToCart }}>{children}</cartContext.Provider>;
};

// Context for all my cart things with error handling when I eventually mess this up
export const useCartContext = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
