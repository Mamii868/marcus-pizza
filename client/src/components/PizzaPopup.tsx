import { Link } from "react-router";
import type { Specialty } from "../types/pizzaTypes";
import Card from "./PizzaCard";

const PizzaPopup = ({ specialties, setPopupVisible }: { specialties: Specialty[]; setPopupVisible: (visible: boolean) => void }) => {
  return (
    <div className="popup fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center z-90">
      <div className="cardContainer w-11/12 md:w-1/2 bg-dark-bg p-4 rounded-2xl border border-border text-white overflow-y-scroll flex flex-col gap-4 m-4">
        <div className="exitButton w-full flex justify-end p-4">
          <button
            onClick={() => setPopupVisible(false)}
            className="bg-red-500 text-white font-bold rounded-full px-4 py-2 hover:bg-red-700 transition duration-200 cursor-pointer">
            <p>X</p>
          </button>
        </div>
        <Link
          to="/order/custom"
          className="w-full bg-orange p-4 rounded-2xl border border-border text-left hover:bg-darkorange transition duration-200 cursor-pointer">
          <p className="text-lg font-bold">Create Custom Pizza</p>
        </Link>
        <h2 className="text-2xl font-bold mb-4 text-center">Specialties</h2>
        {specialties.map((specialty) => (
          <div key={specialty.name} onClick={() => setPopupVisible(false)}>
            <Card name={specialty.name} toppings={specialty.toppings} price={specialty.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaPopup;
