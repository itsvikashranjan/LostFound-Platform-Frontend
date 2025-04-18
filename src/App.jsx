import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Navbar from './components/Navbar'
import Register from "./pages/Register";
import Report from "./pages/Report";
import ReportedItem from "./pages/ReportedItem";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/report" element={<Report/>} />
          <Route path="/reporteditem" element={<ReportedItem/>} />
        
  
        </Routes>
      </div>
      <Footer/>
    </Router>
    
    </>
  );
}




export default App;
