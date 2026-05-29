import { useEffect, useState } from "react";
import { type Crust, type Pizza, type Size, type Topping } from "../types/pizzaTypes";
import { useCartContext } from "../providers/CartProvider";
import { getCrusts, getSizes, getToppings } from "../services/menuService";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";

const CustomPizza = () => {
  const { addPizzaToCart, cartError, setCartError } = useCartContext();
  const [pizza, setPizza] = useState<Pizza>({
    crust: { name: "" },
    size: { name: "" },
    toppings: [],
  });
  const [crustOptions, setCrustOptions] = useState<Crust[]>();
  const [sizeOptions, setSizeOptions] = useState<Size[]>([]);
  const [toppingOptions, setToppingOptions] = useState<Topping[]>([]);
  const navigate = useNavigate();

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

  const handleSubmit = async (e: React.SubmitEvent) => {
    try {
      e.preventDefault();
      setCartError(null);

      if (!pizza.crust || !pizza.size) {
        setCartError("Please select a crust and size for your pizza.");
        return;
      }
      await addPizzaToCart(pizza);
      navigate("/order");
    } catch (e: unknown) {
      console.log("Error adding pizza to cart:", e);
    }
  };

  const handleToppingToggle = (toppingName: string) => {
    // Check if the topping was selected already so it can be deselected
    setPizza((prev) => {
      // Ew some
      const isToppingSelected = prev.toppings.some((topping) => topping.name === toppingName);
      const newToppings = isToppingSelected
        ? prev.toppings.filter((topping) => topping.name !== toppingName)
        : [...prev.toppings, { name: toppingName }];
      const formattedToppings = newToppings.map((topping) => ({
        name: topping.name.toUpperCase().replace(" ", "_").replace("-", "_"),
      }));
      return { ...prev, toppings: formattedToppings };
    });
  };

  if (!crustOptions || !sizeOptions || !toppingOptions) {
    return <div className="w-screen h-max text-center text-8xl animate-pulse">Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="customPizza w-full text-white my-10 px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Create Your Custom Pizza</h1>
        <div className="bg-dark-lightbg rounded-2xl border border-border p-6 flex flex-col gap-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold text-orange">Crust</p>
              <div className="relative">
                <select
                  value={pizza.crust.name}
                  onChange={(e) => setPizza((prev) => ({ ...prev, crust: { name: e.target.value } }))}
                  className="w-full appearance-none bg-dark-bg border border-border text-white rounded-xl px-4 py-3 text-lg cursor-pointer focus:outline-none focus:border-orange transition duration-200">
                  <option value="" disabled>
                    Select a crust...
                  </option>
                  {crustOptions.map((crust) => (
                    <option key={crust.name} value={crust.name.toUpperCase().replace(" ", "_").replace("-", "_")}>
                      {crust.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-orange text-sm">V</div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold text-orange">Size</p>
              <div className="grid grid-cols-3 gap-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size.name}
                    type="button"
                    onClick={() => setPizza((prev) => ({ ...prev, size: { name: size.name.toUpperCase().split(" ")[0] } }))}
                    className={`border border-orange p-4 rounded-xl text-base font-bold transition duration-200 cursor-pointer hover:bg-darkorange flex flex-col items-center gap-1 ${pizza.size.name === size.name.toUpperCase().split(" ")[0] ? "bg-orange" : "bg-dark-bg"}`}>
                    <span>{size.name}</span>
                    <span className="text-sm font-normal">+${size.price?.toFixed(2)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold text-orange">Toppings</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {toppingOptions.map((topping) => (
                  <button
                    key={topping.name}
                    type="button"
                    onClick={() => handleToppingToggle(topping.name)}
                    // I don't like some... but here we are
                    className={`border border-orange p-4 rounded-xl text-base font-bold transition duration-200 cursor-pointer  flex flex-col items-center gap-1 ${pizza.toppings.some((topping) => topping.name === topping.name.toUpperCase().replace(" ", "_").replace("-", "_")) ? "bg-orange" : "hover:bg-darkorange bg-dark-bg"}`}>
                    <span>{topping.name}</span>
                    <span className="text-sm font-normal">+${topping.price?.toFixed(2)}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange hover:bg-darkorange text-white font-bold text-lg py-4 rounded-xl transition duration-200 cursor-pointer mt-2">
              Add to Cart
            </button>
            {cartError && <p className="text-red-500 text-lg font-bold mt-2 text-center">{cartError}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default CustomPizza;
