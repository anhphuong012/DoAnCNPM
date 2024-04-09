import logo from "./logo.svg";
import "./App.css";
import Home from "./component/user/page/Home";
import LoginPage from "./component/user/page/Login";
import Header from "./component/user/page/Header";
import Register from "./component/user/page/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
