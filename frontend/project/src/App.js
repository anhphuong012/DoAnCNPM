import logo from "./logo.svg";
import "./App.css";
import Home from "./component/user/page/Home";
import LoginPage from "./component/user/page/Login";
import Header from "./component/user/page/Header";
import Register from "./component/user/page/Register";
import ListSearch from "./component/user/page/ListSearch";
import Booking from "./component/user/page/Booking";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<ListSearch />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
