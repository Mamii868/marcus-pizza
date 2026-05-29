type Order = {
  deliveryMethod: string;
  address: string;
  items: MenuItem[];
};

type MenuItem = {
  name: string;
  price: number;
};

export type { Order, MenuItem };