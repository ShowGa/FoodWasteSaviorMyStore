// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Store from "./pages/Store";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import Product from "./pages/Product";
import PendingOrders from "./pages/PendingOrders";
import Home from "./pages/Home";
// layouts
import Layout from "./layouts/Layout";
// react-hot-toast
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="store/:storeId" element={<Layout />}>
          <Route path="dashboard" element={<Store />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/pending" element={<PendingOrders />} />
          <Route path="orders/:orderId" element={<OrderDetail />} />

          <Route path="product/:packageId" element={<Product />} />
        </Route>

        <Route path="/mystore-login" element={<Login />} />
        <Route path="/mystore-register" element={<Register />} />
      </Routes>

      <Toaster />
    </BrowserRouter>
  );
}

export default App;
