import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AdminDashboard() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("adminAuth");

  const [users, setUsers] = useState([]);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin-login");
      return;
    }

    setUsers(JSON.parse(localStorage.getItem("users")) || []);
    setInventory(JSON.parse(localStorage.getItem("bloodInventory")) || []);
  }, [isAdmin, navigate]);

  const logout = () => {
    localStorage.removeItem("adminAuth");
    toast.info("Admin logged out");
    navigate("/home");
  };

  const resetAll = () => {
    if (!window.confirm("Reset ALL data?")) return;

    localStorage.removeItem("users");
    localStorage.removeItem("bloodInventory");
    localStorage.removeItem("bloodBanks");
    localStorage.removeItem("hospitals");

    toast.success("All data reset!");
    window.location.reload();
  };

  return (
    <>
      
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className="flex gap-3">
              <button onClick={resetAll} className="bg-black text-white px-4 py-2 rounded">
                Reset All Data
              </button>
              <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded">
                Logout
              </button>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-3">Registered Users</h2>
            {users.length === 0 ? (
              <p>No users yet.</p>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b p-2">Username</th>
                    <th className="border-b p-2">Patient</th>
                    <th className="border-b p-2">Blood Type</th>
                    <th className="border-b p-2">Hospital</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, idx) => (
                    <tr key={idx}>
                      <td className="border-b p-2">{u.username}</td>
                      <td className="border-b p-2">{u.patientName || "-"}</td>
                      <td className="border-b p-2">{u.bloodType || "-"}</td>
                      <td className="border-b p-2">{u.hospital || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Inventory Table */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-3">Blood Inventory</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2">Blood Type</th>
                  <th className="border-b p-2">Units</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((i, idx) => (
                  <tr key={idx}>
                    <td className="border-b p-2">{i.bloodType}</td>
                    <td className="border-b p-2">{i.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default AdminDashboard;
