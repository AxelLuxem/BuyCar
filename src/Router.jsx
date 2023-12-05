import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import SearchPage from "./pages/SearchPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

const Router = () => (
  <Routes>
    <Route path="/" Component={HomePage} />
    <Route path="/test" Component={TestPage} />
    <Route path="/Search" Component={SearchPage} />
    <Route path="/Signup" Component={SignUpPage} />
    <Route path="/Login" Component={LoginPage} />
  </Routes>
);
export default Router;
