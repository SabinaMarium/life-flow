import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Campaign from "./components/Campaign";
import Impact from "./components/Impact";
import RatingStars from "./components/RatingStars";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserDetails from "./components/UserDetails";
import Database from "./components/Database";
import Donors from "./components/Donors";
import Hospitals from "./components/Hospitals";
import BloodBanks from "./components/BloodBanks";
import Patients from "./components/Patients";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";


function App() {
  return (
    <>
      
      <Navbar />
      <ToastContainer position="top-center" autoClose={3000} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/database" element={<Database />} />
        

       
        <Route
          path="/home"
          element={
            <>
              <Banner />
              <Campaign />
              <Donors />
              <Hospitals />
              <BloodBanks />
              <Patients />
              <RatingStars />
              <Impact />
              
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
