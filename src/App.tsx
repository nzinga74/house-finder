import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import Details from "./Pages/Details";
import Search from "./Pages/Search";
import Reserve from "./Pages/Reserve";
import { Contract } from "./Pages/Contract";
import { Login } from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Details />} />
        <Route path="/search" element={<Search />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
