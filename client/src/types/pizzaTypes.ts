type Crust = {
  name: string;
  price?: number;
};

type Size = {
  name: string;
  price?: number;
};
type Topping = {
  name: string;
  price?: number;
};

// This has to be strings in order for the server to get the values for its enums
type Pizza = {
  crust: Crust;
  size: Size;
  toppings: Topping[];
};

type Specialty = {
  name: string;
  toppings: Topping[];
  price: number;
}

export type { Pizza, Crust, Size, Topping, Specialty };
