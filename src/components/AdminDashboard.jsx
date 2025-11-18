import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("adminAuth");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin-login");
      return;
    }

    setUsers(JSON.parse(localStorage.getItem("users")) || []);
  }, []);

  const logout = () => {
    localStorage.removeItem("adminAuth");
    toast.info("Admin logged out");
    navigate("/home");
  };

  // 👇 NEW BUTTON: CLEAR ONLY USERS WHO GOT BLOOD
  const clearFulfilledUsers = () => {
    if (!window.confirm("Remove only users who got blood?")) return;

    const remaining = users.filter((u) => !u.gotBlood);

    localStorage.setItem("users", JSON.stringify(remaining));
    setUsers(remaining);

    toast.success("Cleared all users who got blood!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>

          <div className="flex gap-3">
            <button
              onClick={clearFulfilledUsers}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Clear Fulfilled Users
            </button>

            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
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
                  <th className="border-b p-2">Got Blood?</th>
                </tr>
              </thead>

              <tbody>
                {users.map((u, idx) => (
                  <tr key={idx}>
                    <td className="border-b p-2">{u.username}</td>
                    <td className="border-b p-2">{u.patientName || "-"}</td>
                    <td className="border-b p-2">{u.bloodType || "-"}</td>
                    <td className="border-b p-2">{u.hospital || "-"}</td>

                    {/* Display completed status */}
                    <td className="border-b p-2 text-green-600 font-bold">
                      {u.gotBlood ? "✔" : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
