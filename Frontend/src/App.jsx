import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteRouter from "./website/WebsiteRouter";
import AdminRoutes from "./Admin/AdminRoutes";
import Login from "./authContext/Login";
import Register from "./authContext/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<WebsiteRouter />} />
          <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
