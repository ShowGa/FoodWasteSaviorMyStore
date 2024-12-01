// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Store from "./pages/Store";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import Product from "./pages/Product";
// layouts
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="store/:id/dashboard" element={<Store />} />
          <Route path="store/:id/orders" element={<Orders />} />
          <Route path="store/:id/orders/:orderId" element={<OrderDetail />} />

          <Route path="store/:id/product/:productId" element={<Product />} />
        </Route>

        <Route path="/mystore-login" element={<Login />} />
        <Route path="/mystore-register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
