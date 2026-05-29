import { useCartContext } from "../providers/CartProvider";
import type { Pizza } from "../types/pizzaTypes";
import Button from "./Button";

const CartPopup = () => {
  const { cart, cartAmount, cartError, setIsCartOpen } = useCartContext();
  return (
    <div className="cart w-1/3 h-full absolute top-0 right-0 bg-dark-bg p-4 rounded-l-2xl border border-border text-white flex flex-col gap-4 pt-18">
      <button
        onClick={() => setIsCartOpen(false)}
        className="bg-red-500 text-white font-bold rounded-full px-4 py-2 hover:bg-red-700 transition duration-200 cursor-pointer self-end">
        <p>X</p>
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
      <div className="cartItems flex flex-col gap-2 overflow-y-scroll">
        {cartAmount === 0 ? (
          <p className="text-lg font-bold">Your cart is empty</p>
        ) : (
          cart.items.map((item, index) => {
            if ("crust" in item) {
              // Weird type conversion to get around pizzas being within the cart of menu items
              //   Yes this can break but I trust in the server
              const pizza = item as unknown as Pizza;
              return (
                <div key={index} className="border border-border bg-dark-lightbg p-2 rounded-lg">
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
      <div className="footer border-t-2 py-2 border-border flex items-center justify-between px-4">
        <p className="text-xl font-bold">Total: ${cart.items.reduce((total, item) => total + (item.price || 0), 0).toFixed(2)}</p>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default CartPopup;
