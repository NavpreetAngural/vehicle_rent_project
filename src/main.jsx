import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import "./index.css"
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { ToastContainer , Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    <Routes>
      
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/" element={<Home />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
