import { useEffect, useState } from "react";
import { getSides, getSpecialties } from "../services/menuService";
import Card from "../components/PizzaCard";
import type { Specialty } from "../types/pizzaTypes";
import PizzaPopup from "../components/PizzaPopup";
import { getOrder } from "../services/orderService";
import NavBar from "../components/NavBar";
import CartPopup from "../components/CartPopup";
import { useCartContext } from "../providers/CartProvider";
import SidePopup from "../components/SidePopup";
import type { MenuItem } from "../types/orderTypes";

const Order = () => {
  const { isCartOpen } = useCartContext();
  const [specialties, setSpecialties] = useState<Specialty[]>();
  const [sides, setSides] = useState<MenuItem[]>();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [popupVisible, setPopupVisible] = useState(false);

  // Fetch specialties to display within cards
  useEffect(() => {
    getOrder();

    const fetchSpecialties = async () => {
      const data = await getSpecialties();
      setSpecialties(data);
    };
    const fetchSides = async () => {
      const data = await getSides();
      setSides(data);
    };
    fetchSides();
    fetchSpecialties();
  }, []);

  //   Set specific popup to display based on button selected
  const handlepopupDisplay = (category: string) => {
    setSelectedCategory(category);
    setPopupVisible(true);
  };

  return (
    <>
      <NavBar />
      {isCartOpen && <CartPopup />}
      <div className="w-full text-white my-10 h-max flex flex-col grow">
        <div className="featured">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured</h2>
          <div className="featuredList w-full flex flex-col md:flex-row gap-4 p-4">
            {specialties &&
              specialties
                .slice(0, 3)
                .map((specialty) => <Card key={specialty.name} name={specialty.name} toppings={specialty.toppings} price={specialty.price} />)}
          </div>
        </div>
        <div className="menu">
          <h2 className="text-4xl font-bold mb-4 text-center">Menu</h2>
          <div className="menuList w-full flex gap-4 p-4">
            <button
              onClick={() => handlepopupDisplay("Pizzas")}
              className="w-full bg-dark-bg p-4 h-48 hover:bg-darkorange transition duration-200 rounded-2xl border border-border text-center cursor-pointer">
              <p className="text-2xl font-bold">Pizzas</p>
            </button>
            <button
              onClick={() => handlepopupDisplay("Sides")}
              className="w-full bg-dark-bg p-4 h-48 hover:bg-darkorange transition duration-200 rounded-2xl border border-border text-center cursor-pointer">
              <p className="text-2xl font-bold">Sides</p>
            </button>
            <button
              onClick={() => handlepopupDisplay("Drinks")}
              className="w-full bg-dark-bg p-4 h-48 hover:bg-darkorange transition duration-200 rounded-2xl border border-border text-center cursor-pointer">
              <p className="text-2xl font-bold">Drinks</p>
            </button>
          </div>
        </div>
        {popupVisible && selectedCategory === "Pizzas" && specialties && <PizzaPopup specialties={specialties} setPopupVisible={setPopupVisible} />}
        {popupVisible && selectedCategory === "Sides" && sides && <SidePopup sides={sides} setPopupVisible={setPopupVisible} />}
      </div>
    </>
  );
};

export default Order;
