import { Link } from "react-router";
import { useCartContext } from "../providers/CartProvider";
import { useEffect } from "react";

const NavBar = () => {
  const { cartAmount, updateCart, isCartOpen, setIsCartOpen } = useCartContext();

  useEffect(() => {
    updateCart();
  }, []);

  const handleOpenCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="navbar sticky w-full p-2 h-12 bg-dark-lightbg text-white flex items-center justify-between z-50">
      <Link to="/" className="font-bold text-xl">
        <span className="text-orange">Marcus</span> Pizza
      </Link>
      <div onClick={handleOpenCart} className="cartIcon relative text-2xl cursor-pointer font-bold">
        🛒
        <div className="absolute top-0 right-0 bg-orange text-dark-lightbg rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartAmount}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
