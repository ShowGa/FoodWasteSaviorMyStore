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
        <Route path="store/:id" element={<Layout />}>
          <Route path="dashboard" element={<Store />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:orderId" element={<OrderDetail />} />

          <Route path="product/:productId" element={<Product />} />
        </Route>

        <Route path="/mystore-login" element={<Login />} />
        <Route path="/mystore-register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
