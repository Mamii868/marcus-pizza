import { useState } from "react";
import type { Specialty } from "../types/pizzaTypes";
import Card from "./Card";

const PizzaPopup = ({ specialties, setPopupVisible }: { specialties: Specialty[]; setPopupVisible: (visible: boolean) => void }) => {
  const [customPopupVisible, setCustomPopupVisible] = useState(false);

  const handlepopupDisplay = () => {
    setCustomPopupVisible(true);
  };

  return (
    <div className="popup fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center">
      <div className="cardContainer w-11/12 md:w-1/2 bg-dark-bg p-4 rounded-2xl border border-border text-white overflow-y-scroll flex flex-col gap-4">
        <div className="exitButton w-full flex justify-end p-4">
          <button
            onClick={() => setPopupVisible(false)}
            className="bg-red-500 text-white font-bold rounded-full px-4 py-2 hover:bg-red-500 transition duration-200 cursor-pointer">
            <p>Close</p>
          </button>
        </div>
        <button
          onClick={() => handlepopupDisplay()}
          className="w-full bg-orange p-4 rounded-2xl border border-border text-left hover:bg-darkorange transition duration-200 cursor-pointer">
          <p className="text-lg font-bold">Create Custom Pizza</p>
        </button>
        {specialties.map((specialty) => (
          <Card key={specialty.name} title={specialty.name} toppings={specialty.toppings} crust={"Regular"} price={specialty.price} />
        ))}
      </div>
    </div>
  );
};

export default PizzaPopup;
