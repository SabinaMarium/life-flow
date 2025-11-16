import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === credentials.username && u.password === credentials.password);

    if (user) {
      // mark session
      localStorage.setItem("authUser", user.username);
      toast.success(`Welcome back, ${user.username}!`);
      navigate("/database", { replace: true });
    } else {
      toast.error("Life-Flow says: Invalid username or password");
      navigate("/home", { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Username</label>
            <input name="username" value={credentials.username} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
          </div>

          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
          </div>

          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
