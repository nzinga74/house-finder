import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./provider/context/authContext";
import { MainRoute } from "./routes";

function App() {
  return (
    <AuthProvider>
      <MainRoute />
    </AuthProvider>
  );
}

export default App;
