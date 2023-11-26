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
import { AuthProvider } from "./context/AuthContext";
import Prodects from "./pages/Prodects";
import D from "./pages/D";
import Details from './pages/Details'
function App() {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const togglePortal = () => {
    setIsPortalOpen(!isPortalOpen);
  };


  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Prodects />} />
            <Route path="/d/:s" element={<D />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:id" element={<Details/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AuthProvider>












        {/* <div>
          <h1>Normal Content</h1>
          <button onClick={togglePortal}>Toggle Portal</button>
          {isPortalOpen && (
            <PortalComponent>
              <div className="portal-content z-50 bg-opacity-40 bg-slate-300 flex">
                <h2>Portal Content</h2>
                <p>
                  This content is rendered outside the normal component
                  hierarchy.
                </p>
              </div>
            </PortalComponent>
          )}
        </div> */}
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
