interface CardProps {
  title: string;
  toppings: string[];
  crust: string;
  price: number;
}

const Card = ({ title, toppings, crust, price }: CardProps) => {
  return (
    <div className="card w-full flex flex-col gap-2 items-center justify-center p-2">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <p>{crust} Crust</p>
      <div className="toppingList">
        {toppings.map((topping) => (
          <p>- {topping}</p>
        ))}
      </div>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default Card;
