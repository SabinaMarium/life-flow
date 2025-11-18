import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserDetails() {
  const navigate = useNavigate();

  // load last signed up user (most recent)
  const [user, setUser] = useState(null);
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length === 0) {
      // no user signed up -> go to signup
      navigate("/signup");
      return;
    }
    setUser(users[users.length - 1]);
  }, [navigate]);

  const [details, setDetails] = useState({
    phone: "",
    address: "",
    bloodType: "",
    hospital: "",
    patientName: "",
  });

  useEffect(() => {
    // prefill if user already had details (optional)
    if (!user) return;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const latest = users.find(u => u.username === user.username);
    if (latest) {
      setDetails({
        phone: latest.phone || "",
        address: latest.address || "",
        bloodType: latest.bloodType || "",
        hospital: latest.hospital || "",
        patientName: latest.patientName || "",
      });
    }
  }, [user]);

  const handleChange = e => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = e => {
    e.preventDefault();
    if (!user) return;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const idx = users.findIndex(u => u.username === user.username);
    if (idx === -1) return;

    users[idx] = { ...users[idx], ...details };
    localStorage.setItem("users", JSON.stringify(users));

    toast.info("Details saved! Please log in.", { autoClose: 3000 });
    navigate("/", { replace: true });
  };

  return (
    <div>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center">Patient & Request Details</h2>

          <div>
            <label className="block font-semibold mb-1">Patient Name</label>
            <input name="patientName" value={details.patientName} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block font-semibold mb-1">Needed Blood Type</label>
            <select name="bloodType" value={details.bloodType} onChange={handleChange} className="w-full border px-3 py-2 rounded">
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Hospital Name</label>
            <input name="hospital" value={details.hospital} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input name="phone" value={details.phone} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block font-semibold mb-1">Address (optional)</label>
            <input name="address" value={details.address} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>

          <button onClick={handleSave} className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Save & Proceed to Login</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserDetails;                                   