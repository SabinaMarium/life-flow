import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

// -------------------- SAMPLE DATA SETUPS --------------------

function ensureInitialInventory() {
  const inv = localStorage.getItem("bloodInventory");
  if (inv) return JSON.parse(inv);

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
    { name: "LifeCare Blood Center", address: "Khulna, Bangladesh" },
    { name: "Green Health Blood Bank", address: "Rajshahi, Bangladesh" },
  ];
  localStorage.setItem("bloodBanks", JSON.stringify(sample));
  return sample;
}

function ensureSampleHospitals() {
  const hs = localStorage.getItem("hospitals");
  if (hs) return JSON.parse(hs);

  const sample = [
    { name: "Square Hospital", address: "Dhaka, Bangladesh" },
    { name: "United Hospital", address: "Dhaka, Bangladesh" },
    { name: "Ibn Sina Hospital", address: "Sylhet, Bangladesh" },
    { name: "Chittagong Medical College", address: "Chittagong, Bangladesh" },
  ];
  localStorage.setItem("hospitals", JSON.stringify(sample));
  return sample;
}

// -------------------- DATABASE COMPONENT --------------------

function Database() {
  const navigate = useNavigate();

  const [inventory, setInventory] = useState([]);
  const [users, setUsers] = useState([]);
  const [bloodBanks, setBloodBanks] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  const authUser = localStorage.getItem("authUser");
  const adminUsername = "admin";

  // ---- RANDOM SAMPLE DONORS GENERATED ----
  const donorList = [
    { name: "Rahim Uddin", phone: "01711-223344" },
    { name: "Karim Hossain", phone: "01822-334455" },
    { name: "Abdul Malik", phone: "01933-445566" },
    { name: "Sakib Chowdhury", phone: "01644-556677" },
    { name: "Farhan Ahmed", phone: "01555-667788" },
    { name: "Nusrat Jahan", phone: "01766-778899" },
    { name: "Rafiul Islam", phone: "01377-889900" },
    { name: "Mehedi Hasan", phone: "01888-990011" },
  ];

  const randomDonor = () => {
    return donorList[Math.floor(Math.random() * donorList.length)];
  };

  useEffect(() => {
    if (!authUser) {
      navigate("/", { replace: true });
      return;
    }

    setInventory(ensureInitialInventory());
    setUsers(JSON.parse(localStorage.getItem("users")) || []);
    setBloodBanks(ensureSampleBloodBanks());
    setHospitals(ensureSampleHospitals());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    navigate("/home");
  };

  const clearAll = () => {
    if (!window.confirm("Are you sure? This will erase ALL data!")) return;

    localStorage.removeItem("users");
    localStorage.removeItem("bloodInventory");
    localStorage.removeItem("bloodBanks");
    localStorage.removeItem("hospitals");

    window.location.reload();
  };

  const patientByType = (type) => {
    return (
      users
        .filter((u) => u.bloodType === type && u.patientName)
        .map((u) => u.patientName)
        .join(", ") || "-"
    );
  };

  const closestBloodBank = (hospitalName) => {
    if (!hospitalName) return "-";
    return bloodBanks.length > 0 ? bloodBanks[0].name : "-";
  };

  // --- NEW: RANDOM DONOR RECOMMENDATION ---
  const recommendedDonors = () => {
    const donor = randomDonor();
    return `${donor.name} (${donor.phone})`;
  };

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Blood Donation Database</h1>

            <div className="flex items-center gap-3">
              <span className="text-sm">
                Logged in as: <strong>{authUser}</strong>
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Log out
              </button>

              {authUser === adminUsername && (
                <button
                  onClick={clearAll}
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Reset All Data
                </button>
              )}
            </div>
          </div>

          {/* Blood Inventory Table */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-3">Blood Inventory</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b p-2">Blood Type</th>
                  <th className="border-b p-2">Units Available</th>
                  <th className="border-b p-2">Requested By</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((row) => (
                  <tr key={row.bloodType}>
                    <td className="border-b p-2">{row.bloodType}</td>
                    <td className="border-b p-2">{row.amount}</td>
                    <td className="border-b p-2">{patientByType(row.bloodType)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Patient Requests Table */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-3">Patient Requests</h2>
            {users.length === 0 ? (
              <p>No patient requests found.</p>
            ) : (
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="border-b p-2">Username</th>
                    <th className="border-b p-2">Patient</th>
                    <th className="border-b p-2">Blood Type</th>
                    <th className="border-b p-2">Hospital</th>
                    <th className="border-b p-2">Phone</th>
                    <th className="border-b p-2">Suggested Blood Bank</th>
                    <th className="border-b p-2">Recommended Donor</th>
                    <th className="border-b p-2">Hospital Map</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr key={i}>
                      <td className="border-b p-2">{u.username}</td>
                      <td className="border-b p-2">{u.patientName || "-"}</td>
                      <td className="border-b p-2">{u.bloodType || "-"}</td>
                      <td className="border-b p-2">{u.hospital || "-"}</td>
                      <td className="border-b p-2">{u.phone || "-"}</td>
                      <td className="border-b p-2">{closestBloodBank(u.hospital)}</td>

                      {/* NEW RANDOM DONOR INFO */}
                      <td className="border-b p-2">{recommendedDonors()}</td>

                      <td className="border-b p-2">
                        {u.hospital ? (
                          <iframe
                            title={`map-${i}`}
                            src={`https://www.google.com/maps?q=${encodeURIComponent(
                              u.hospital
                            )}&output=embed`}
                            className="w-full h-32 border rounded"
                            loading="lazy"
                          />
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Blood Banks & Hospitals Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Blood Banks */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-3">Blood Banks (Live Map)</h2>
              <div className="space-y-4">
                {bloodBanks.map((b, i) => (
                  <div key={i} className="border rounded">
                    <div className="p-2">
                      <strong>{b.name}</strong>
                      <p className="text-sm text-gray-600">{b.address}</p>
                    </div>
                    <iframe
                      className="w-full h-48"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        b.address
                      )}&output=embed`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Hospitals */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-3">Hospitals (Live Map)</h2>
              <div className="space-y-4">
                {hospitals.map((h, i) => (
                  <div key={i} className="border rounded">
                    <div className="p-2">
                      <strong>{h.name}</strong>
                      <p className="text-sm text-gray-600">{h.address}</p>
                    </div>
                    <iframe
                      className="w-full h-48"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        h.address
                      )}&output=embed`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}

export default Database;
