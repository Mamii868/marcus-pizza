import { useCartContext } from "../providers/CartProvider";
import type { Pizza } from "../types/pizzaTypes";

const CartPopup = () => {
  const { cart, cartAmount, cartError } = useCartContext();
  return (
    <div className="cart w-1/2 h-full absolute top-0 right-0 bg-dark-bg p-4 rounded-l-2xl border border-border text-white flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
      <div className="cartItems flex flex-col gap-2">
        {cartAmount === 0 ? (
          <p className="text-lg font-bold">Your cart is empty</p>
        ) : (
          cart.items.map((item, index) => {
            if ("crust" in item) {
              // Weird type conversion to get around pizzas being within the cart of menu items
              const pizza = item as unknown as Pizza;
              return (
                <div key={index} className="border border-border p-2 rounded-lg">
                  <p className="text-lg font-bold">{pizza.crust.name} Pizza</p>
                  <p>Size: {pizza.size.name}</p>
                  <p>Toppings:</p>
                  <ul className="list-disc list-inside">
                    {pizza.toppings.map((topping, index) => (
                      <li key={index}>{topping.name}</li>
                    ))}
                  </ul>
                  <p className="text-lg font-bold">Price: ${item.price?.toFixed(2)}</p>
                </div>
              );
            } else {
              return (
                <p key={index} className="text-lg font-bold">
                  {item.name} - ${item.price?.toFixed(2)}
                </p>
              );
            }
          })
        )}
        {cartError && <p className="text-red-500 text-lg font-bold mt-2 text-center">{cartError}</p>}
      </div>
    </div>
  );
};

export default CartPopup;
