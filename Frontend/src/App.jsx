import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteRouter from "./website/WebsiteRouter";
import AdminRoutes from "./Admin/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<WebsiteRouter />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
