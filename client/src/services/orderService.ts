import type { MenuItem, Order } from "../types/orderTypes";
import type { Pizza } from "../types/pizzaTypes";

// Get existing/create new order from api
export const getOrder = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_BACKEND_URL}/order/get`);

  if (!response.ok) {
    throw new Error("Failed to fetch order data");
  }
  const data: Order = await response.json();
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

  const data: { response: string } = await response.json();
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
    body: JSON.stringify({
      name: item.name.toUpperCase().replace(" ", "_"),
      price: item.price,
    }),
  });

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error("Missing item information");
    } else {
      throw new Error("Server Error: Please Try Again Later");
    }
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
    // This is to get around the whole type thing rather than passing in pizza itself. the server only wants the names
    body: JSON.stringify({
      crust: pizza.crust.name.toUpperCase(),
      size: pizza.size.name.toUpperCase(),
      toppings: pizza.toppings.map((topping) => topping.name.toUpperCase()),
    }),
  });

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error("Missing pizza information");
    } else {
      throw new Error("Server Error: Please Try Again Later");
    }
  }

  const data = await response.json();
  return data;
};
