import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default PageRoutes;
