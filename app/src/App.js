import "./App.css";
import React, { useState } from "react";
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
import PortalComponent from "./components/Home/PortalComponent";
function App() {
  const message = "Hi";
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const togglePortal = () => {
    setIsPortalOpen(!isPortalOpen);
  };
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
        <div>
          <h1>Normal Content</h1>
          <button onClick={togglePortal}>Toggle Portal</button>
          {isPortalOpen && (
            <PortalComponent>
              <div className="portal-content">
                <h2>Portal Content</h2>
                <p>
                  This content is rendered outside the normal component
                  hierarchy.
                </p>
              </div>
            </PortalComponent>
          )}
        </div>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
