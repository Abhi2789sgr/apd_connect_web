import './App.css';
import AdminLogin from "./UI/Master/AdminLogin";
import Register from "./UI/Patient/Register";
import Login from "./UI/Patient/Login";
import Home from "./UI/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLogin/>}>
        </Route>
        <Route path="/Register" element={<Register/>}>
        </Route>
        <Route path="/Login" element={<Login/>}>
        </Route>
        <Route path="/Home" element={<Home/>}>
        </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App;
