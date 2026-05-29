import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import Order from "./pages/Order";
import { CartProvider } from "./providers/CartProvider";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<CartProvider />}>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/custom" element={<Order />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>,
);
