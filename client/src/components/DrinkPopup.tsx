import type { MenuItem } from "../types/orderTypes";
import MenuItemCard from "./MenuItemCard";

const DrinkPopup = ({ drinks, setPopupVisible }: { drinks: MenuItem[]; setPopupVisible: (visible: boolean) => void }) => {
  return (
    <div className="popup fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center z-90">
      <div className="cardContainer w-11/12 md:w-1/2 bg-dark-bg p-4 rounded-2xl border border-border text-white overflow-y-auto flex flex-col gap-4 m-4">
        <div className="exitButton w-full flex justify-end p-4">
          <button
            onClick={() => setPopupVisible(false)}
            className="bg-red-500 text-white font-bold rounded-full px-4 py-2 hover:bg-red-700 transition duration-200 cursor-pointer">
            <p>X</p>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Drinks</h2>
        {drinks.map((drink) => (
          <div key={drink.name} onClick={() => setPopupVisible(false)}>
            <MenuItemCard name={drink.name} price={drink.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkPopup;
