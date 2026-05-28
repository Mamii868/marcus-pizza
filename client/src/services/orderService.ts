import type { MenuItem } from "../types/orderTypes";
import type { Pizza } from "../types/pizzaTypes";

// Get existing/create new order from api
export const getOrder = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_BACKEND_URL}/order/get`);

  if (!response.ok) {
    throw new Error("Failed to fetch order data");
  }
  const data = await response.json();
  console.log("Order data:", data);
  return data;
};

// Checkout... Yes
// The caffiene kinda kicked in really hard here Eric so comments may start going weird
export const checkout = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_BACKEND_URL}/order/checkout`);
  if (!response.ok) {
    throw new Error("Failed to checkout order");
  }

  const data = await response.json();
  console.log("Checkout response:", data);
  return data;
};

// Adds an item to the order object on the server
export const addItem = async (item: MenuItem) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_BACKEND_URL}/order/add/item`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error("Failed to add item to order");
  }

  const data = await response.json();
  console.log("Add item response:", data);
  return data;
};

export const addPizza = async (pizza: Pizza) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_BACKEND_URL}/order/add/pizza`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pizza),
  });

  if (!response.ok) {
    throw new Error("Failed to add pizza to order");
  }

  const data = await response.json();
  console.log("Add pizza response:", data);
  return data;
};
