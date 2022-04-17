import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Pages/Sheared/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Pages/Sheared/Footer/Footer";
import Services from "./Components/Pages/Services/Services";
import LogIn from "./Components/Pages//Register-LogIn/LogIn/LogIn";
import Register from "./Components/Pages//Register-LogIn/Register/Register";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
