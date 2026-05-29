import { useEffect, useState } from "react";
import { type Crust, type Pizza, type Size, type Topping } from "../types/pizzaTypes";
import { useCartContext } from "../providers/CartProvider";
import { getCrusts, getSizes, getToppings } from "../services/menuService";

const CustomPizza = () => {
  const { addPizzaToCart } = useCartContext();
  const [pizza, setPizza] = useState<Pizza>({
    crust: "",
    size: "",
    toppings: [],
  });
  const [crustOptions, setCrustOptions] = useState<Crust[]>();
  const [sizeOptions, setSizeOptions] = useState<Size[]>([]);
  const [toppingOptions, setToppingOptions] = useState<Topping[]>([]);

  //   Get literally every pizza option ever
  useEffect(() => {
    const fetchCrustOptions = async () => {
      const data = await getCrusts();
      setCrustOptions(data);
    };
    const fetchSizeOptions = async () => {
      const data = await getSizes();
      setSizeOptions(data);
    };
    const fetchToppingOptions = async () => {
      const data = await getToppings();
      setToppingOptions(data);
    };
    fetchCrustOptions();
    fetchSizeOptions();
    fetchToppingOptions();
  }, []);

  const handleSubmit = () => {
    addPizzaToCart(pizza);
  };

  const handleToppingToggle = (toppingName: string) => {
    setPizza((prev) => {
      const isToppingSelected = prev.toppings.includes(toppingName);
      const newToppings = isToppingSelected ? prev.toppings.filter((t) => t !== toppingName) : [...prev.toppings, toppingName];
      return { ...prev, toppings: newToppings };
    });
  };

  if (!crustOptions || !sizeOptions || !toppingOptions) {
    return <div className="w-screen h-max text-center text-8xl animate-pulse">Loading...</div>;
  }

  return (
    <div className="customPizza w-full text-white my-10">
      <h1 className="text-4xl font-bold mb-4">Create Your Custom Pizza</h1>
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-2xl text-center">Crust</label>
          <div className="flex gap-2 items-center justify-center">
            {crustOptions.map((crust) => (
              <button
                key={crust.name}
                type="button"
                onClick={() => setPizza((prev) => ({ ...prev, crust: crust.name.toUpperCase().replace(" ", "_") }))}
                className={`border border-orange p-4 rounded-2xl text-lg font-bold  transition duration-200 cursor-pointer ${pizza.crust === crust.name.toUpperCase().replace(" ", "_") ? "bg-orange" : ""}`}>
                {crust.name}
              </button>
            ))}
          </div>
          <label className="text-2xl text-center">Size</label>
          <div className="flex gap-2 items-center justify-center">
            {sizeOptions.map((size) => (
              <button
                key={size.name}
                type="button"
                onClick={() => setPizza((prev) => ({ ...prev, size: size.name.toUpperCase().replace(" ", "_") }))}
                className={`border border-orange p-4 rounded-2xl text-lg font-bold  hover:bg-darkorange transition duration-200 cursor-pointer ${pizza.size === size.name.toUpperCase().replace(" ", "_") ? "bg-orange" : ""}`}>
                {size.name} +${size.price?.toFixed(2)}
              </button>
            ))}
          </div>
          <label className="text-2xl text-center">Toppings</label>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {toppingOptions.map((topping) => (
              <button
                key={topping.name}
                type="button"
                onClick={() => handleToppingToggle(topping.name)}
                className={`border border-orange p-4 rounded-2xl text-lg font-bold  hover:bg-darkorange transition duration-200 cursor-pointer ${pizza.toppings.includes(topping.name) ? "bg-orange" : ""}`}>
                {topping.name} +${topping.price?.toFixed(2)}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomPizza;
