import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SellCar from "../src/pages/SellCar";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Car from "./pages/Car";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/Search" Component={SearchPage} />
      <Route path="/Sell" Component={SellCar} />
      <Route path="/Signup" Component={SignUpPage} />
      <Route path="/Login" Component={LoginPage} />
      <Route path="/Car/:id" Component={Car} />
    </Routes>
  );
};

export default Router;
