import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";
import AuthContext from "./context/AuthContext";
function App() {
  const message = "Hi";

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AuthContext.Provider value={{ message }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AuthContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
