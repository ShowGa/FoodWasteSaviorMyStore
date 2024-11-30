// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Store from "./pages/Store";
// layouts
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/store/:id" element={<Store />} />
        </Route>

        <Route path="/mystore-login" element={<Login />} />
        <Route path="/mystore-register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
