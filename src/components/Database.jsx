import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function ensureInitialInventory() {
  const inv = localStorage.getItem("bloodInventory");
  if (inv) return JSON.parse(inv);

  // initial stock sample
  const initial = [
    { bloodType: "A+", amount: 10 },
    { bloodType: "A-", amount: 5 },
    { bloodType: "B+", amount: 8 },
    { bloodType: "B-", amount: 4 },
    { bloodType: "AB+", amount: 6 },
    { bloodType: "AB-", amount: 3 },
    { bloodType: "O+", amount: 12 },
    { bloodType: "O-", amount: 7 },
  ];
  localStorage.setItem("bloodInventory", JSON.stringify(initial));
  return initial;
}

function ensureSampleBloodBanks() {
  const bs = localStorage.getItem("bloodBanks");
  if (bs) return JSON.parse(bs);

  const sample = [
    { name: "City Blood Bank", address: "Dhaka, Bangladesh" },
    { name: "Central Blood Bank", address: "Chittagong, Bangladesh" },
    { name: "Northside Blood Bank", address: "Sylhet, Bangladesh" },
  ];
  localStorage.setItem("bloodBanks", JSON.stringify(sample));
  return sample;
}

function Database() {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [users, setUsers] = useState([]);
  const [bloodBanks, setBloodBanks] = useState([]);
  const authUser = localStorage.getItem("authUser");

  useEffect(() => {
    // require login
    if (!authUser) {
      navigate("/", { replace: true });
      return;
    }

    setInventory(ensureInitialInventory());
    setUsers(JSON.parse(localStorage.getItem("users")) || []);
    setBloodBanks(ensureSampleBloodBanks());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    navigate("/home", { replace: true });
  };

  // Find patients per blood type
  const patientByType = (type) => {
    return users.filter(u => u.bloodType === type && u.patientName).map(u => u.patientName).join(", ") || "-";
  };

  return (
    <div className="min-h-screen flex flex-col">
      

      <main className="flex-grow bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Database / Inventory</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Signed in as: <strong>{authUser}</strong></span>
              <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">Log out</button>
            </div>
          </div>

          {/* Inventory Table */}
          <div className="bg-white shadow rounded p-4 overflow-x-auto">
            <h2 className="text-xl font-semibold mb-2">Available Blood Inventory</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b px-3 py-2">Blood Type</th>
                  <th className="border-b px-3 py-2">Amount (units)</th>
                  <th className="border-b px-3 py-2">Patients (request)</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((row) => (
                  <tr key={row.bloodType}>
                    <td className="border-b px-3 py-2">{row.bloodType}</td>
                    <td className="border-b px-3 py-2">{row.amount}</td>
                    <td className="border-b px-3 py-2">{patientByType(row.bloodType)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Donors / Blood Banks / Hospitals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded p-4">
              <h3 className="text-lg font-semibold mb-2">Registered Requests / Patients</h3>
              <div>
                {users.length === 0 ? <p>No users yet.</p> : (
                  <table className="w-full text-left">
                    <thead>
                      <tr>
                        <th className="border-b px-2 py-1">Username</th>
                        <th className="border-b px-2 py-1">Patient</th>
                        <th className="border-b px-2 py-1">Blood Type</th>
                        <th className="border-b px-2 py-1">Hospital</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((u, idx) => (
                        <tr key={idx}>
                          <td className="border-b px-2 py-1">{u.username}</td>
                          <td className="border-b px-2 py-1">{u.patientName || "-"}</td>
                          <td className="border-b px-2 py-1">{u.bloodType || "-"}</td>
                          <td className="border-b px-2 py-1">{u.hospital || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            <div className="bg-white shadow rounded p-4">
              <h3 className="text-lg font-semibold mb-2">Blood Banks (live map)</h3>
              <div className="space-y-4">
                {bloodBanks.map((b, i) => (
                  <div key={i} className="border rounded overflow-hidden">
                    <div className="p-2">
                      <strong>{b.name}</strong>
                      <div className="text-sm text-gray-600">{b.address}</div>
                    </div>
                    <div className="w-full h-48">
                      <iframe
                        title={`map-${i}`}
                        src={`https://www.google.com/maps?q=${encodeURIComponent(b.address)}&output=embed`}
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Database;
