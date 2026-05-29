import type { MenuItem } from "../types/orderTypes";
import type { Crust, Size, Specialty, Topping } from "../types/pizzaTypes";

export const getSides = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_BACKEND_URL}/menu/sides`);
  if (!response.ok) {
    throw new Error("Failed to fetch sides");
  }

  const data: MenuItem[] = await response.json();
  console.log("Sides data:", data);
  return data;
};

export const getToppings = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_BACKEND_URL}/menu/toppings`);
  if (!response.ok) {
    throw new Error("Failed to fetch toppings");
  }

  const data: Topping[] = await response.json();
  console.log("Toppings data:", data);
  return data;
};

export const getCrusts = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_BACKEND_URL}/menu/crusts`);
  if (!response.ok) {
    throw new Error("Failed to fetch crusts");
  }

  const data: Crust[] = await response.json();
  console.log("Crusts data:", data);
  return data;
};

export const getDrinks = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_BACKEND_URL}/menu/drinks`);
  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }

  const data: MenuItem[] = await response.json();
  console.log("Drinks data:", data);
  return data;
};

export const getSizes = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_BACKEND_URL}/menu/sizes`);
  if (!response.ok) {
    throw new Error("Failed to fetch sizes");
  }

  const data: Size[] = await response.json();
  console.log("Sizes data:", data);
  return data;
};

export const getSpecialties = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_BACKEND_URL}/menu/specialties`);

  if (!response.ok) {
    throw new Error("Failed to fetch specialties");
  }

  const data: Specialty[] = await response.json();
  console.log("Specialties data:", data);
  return data;
};
