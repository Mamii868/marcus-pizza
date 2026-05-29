import { useEffect, useState } from "react";
import { getSpecialties } from "../services/menuService";
import Card from "../components/Card";
import type { Specialty } from "../types/pizzaTypes";

const Order = () => {
  const [specialties, setSpecialties] = useState<Specialty[]>();

  // Fetch specialties to display within cards
  useEffect(() => {
    const fetchSpecialties = async () => {
      const data = await getSpecialties();
      setSpecialties(data);
    };
    fetchSpecialties();
  }, []);

  return (
    <div className="w-full">
      <div className="featured">
        <h2>Featured</h2>
        {specialties &&
          specialties.map((specialty) => (
            <Card key={specialty.name} title={specialty.name} toppings={specialty.toppings} crust={"Regular"} price={specialty.price} />
          ))}
      </div>
    </div>
  );
};

export default Order;
