import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Layout } from "./components";

const App: React.FC = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route path="/" element={<Navigate to="login" />} />
    <Route path="/layout" element={<Layout />} />
  </Routes>
);

export default App;
