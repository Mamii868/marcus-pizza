import { useEffect, useState } from "react";
import { getSpecialties } from "../services/menuService";
import Card from "../components/Card";
import type { Specialty } from "../types/pizzaTypes";
import PizzaPopup from "../components/PizzaPopup";

const Order = () => {
  const [specialties, setSpecialties] = useState<Specialty[]>();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [popupVisible, setPopupVisible] = useState(false);

  // Fetch specialties to display within cards
  useEffect(() => {
    const fetchSpecialties = async () => {
      const data = await getSpecialties();
      setSpecialties(data);
    };
    fetchSpecialties();
  }, []);

  const handlepopupDisplay = (category: string) => {
    setSelectedCategory(category);
    setPopupVisible(true);
  };

  return (
    <div className="w-full text-white my-10">
      <div className="featured">
        <h2 className="text-2xl font-bold mb-4 text-center">Featured</h2>
        <div className="featuredList w-full flex flex-col md:flex-row gap-4 p-4">
          {specialties &&
            specialties
              .slice(0, 3)
              .map((specialty) => (
                <Card key={specialty.name} name={specialty.name} toppings={specialty.toppings} price={specialty.price} />
              ))}
        </div>
      </div>
      <div className="menu">
        <h2 className="text-2xl font-bold mb-4 text-center">Menu</h2>
        <div className="menuList w-full flex flex-col gap-4 p-4">
          <button onClick={() => handlepopupDisplay("Pizzas")} className="w-full bg-dark-bg p-4 rounded-2xl border border-border text-left">
            <p className="text-lg font-bold">Pizzas</p>
          </button>
          <button onClick={() => handlepopupDisplay("Sides")} className="w-full bg-dark-bg p-4 rounded-2xl border border-border text-left">
            <p className="text-lg font-bold">Sides</p>
          </button>
          <button onClick={() => handlepopupDisplay("Drinks")} className="w-full bg-dark-bg p-4 rounded-2xl border border-border text-left">
            <p className="text-lg font-bold">Drinks</p>
          </button>
        </div>
      </div>
      {popupVisible && selectedCategory === "Pizzas" && specialties && <PizzaPopup specialties={specialties} setPopupVisible={setPopupVisible} />}
    </div>
  );
};

export default Order;
