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
  crust: String;
  size: String;
  toppings: String[];
};

export type { Pizza, Crust, Size, Topping };
