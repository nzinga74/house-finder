import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Contract } from "../Pages/Contract";
import Details from "../Pages/Details";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import Reserve from "../Pages/Reserve";
import Search from "../Pages/Search";
import { useAUth } from "../provider/context/authContext";

const MainRoute = () => {
  const { signed } = useAUth();

  return (
    <BrowserRouter>
      {signed ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/search" element={<Search />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
      <ToastContainer />
    </BrowserRouter>
  );
};
export { MainRoute };
