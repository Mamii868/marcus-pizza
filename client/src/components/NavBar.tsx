import { Link } from "react-router";
import { useCartContext } from "../providers/CartProvider";

const NavBar = () => {
  const { cart } = useCartContext();
  return (
    <nav className="navbar w-full p-2 h-12 bg-dark-lightbg text-white flex items-center justify-between">
      <Link to="/" className="font-bold text-xl">
        <span className="text-orange">Marcus</span> Pizza
      </Link>
      <div className="cartIcon cursor-pointer">
        <span className="text-lg font-bold">Cart </span>
        {cart.items.length}
      </div>
    </nav>
  );
};

export default NavBar;
