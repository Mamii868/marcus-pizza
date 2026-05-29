import { createContext, useContext, useState } from "react";
import type { MenuItem, Order } from "../types/orderTypes";
import { addItem, addPizza, getOrder } from "../services/orderService";
import type { Pizza } from "../types/pizzaTypes";
import { Outlet } from "react-router";

interface CartProviderProps {
  cart: Order;
  cartAmount: number;
  setCart: (cart: Order) => void;
  updateCart: () => void;
  addItemToCart: (item: MenuItem) => Promise<void>;
  addPizzaToCart: (pizza: Pizza) => Promise<void>;
  cartError: string | null;
  setCartError: (error: string | null) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartProviderProps | undefined>(undefined);

// Allows use of functions and variables across the app
export const CartProvider: React.FC = () => {
  const [cart, setCart] = useState<Order>({
    deliveryMethod: "",
    address: "",
    items: [],
  });
  const [cartAmount, setCartAmount] = useState<number>(0);
  const [cartError, setCartError] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const updateCart = async () => {
    const cartData = await getOrder();
    setCart(cartData);
    setCartAmount(cartData.items.length);
  };

  const addItemToCart = async (item: MenuItem) => {
    try {
      await addItem(item);
      await updateCart();
    } catch (e: unknown) {
      // Why is typescript complicated
      if (e instanceof Error) {
        setCartError(e.message);
        throw e;
      } else {
        setCartError("An unknown error occurred");
      }
    }
  };

  const addPizzaToCart = async (pizza: Pizza) => {
    try {
      await addPizza(pizza);
      await updateCart();
    } catch (e: unknown) {
      // Why is typescript complicated
      if (e instanceof Error) {
        setCartError(e.message);
        throw e;
      } else {
        setCartError("An unknown error occurred");
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, cartAmount, setCart, updateCart, addItemToCart, addPizzaToCart, cartError, setCartError, isCartOpen, setIsCartOpen }}>
      <Outlet />
    </CartContext.Provider>
  );
};

// Context for all my cart things with error handling when I eventually mess this up
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
