import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { checkout } from "../services/orderService";
import Button from "./Button";
import { useCartContext } from "../providers/CartProvider";

const CheckoutPopup = () => {
  const navigate = useNavigate();
  const { setIsCheckoutOpen } = useCartContext();
  const [checkedOut, setCheckedOut] = useState(false);
  const [receipt, setReceipt] = useState<string | null>(null);

  useEffect(() => {
    const fetchCheckout = async () => {
      const receipt = await checkout();
      setReceipt(receipt.response);
      setCheckedOut(true);
    };
    fetchCheckout();
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-dark-lightbg px-24 py-12 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        {checkedOut && receipt ? (
          <>
            <p className="mb-4">Here's your receipt!</p>
            <div className="receipt p-4 bg-dark-bg border border-border rounded-lg mb-4 overflow-y-auto max-h-96">
              {receipt.split("\n").map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <Button
              onClick={() => {
                setIsCheckoutOpen(false);
                navigate("/");
              }}>
              Close
            </Button>
          </>
        ) : (
          <p className="mb-4">Processing your order...</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutPopup;
