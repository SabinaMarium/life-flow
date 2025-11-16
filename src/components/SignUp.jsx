import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    dob: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleDateChange = date => setFormData(prev => ({ ...prev, dob: date }));

  const isUsernameUnique = username => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return !users.some(u => u.username.toLowerCase() === username.toLowerCase());
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.username) newErrors.username = "Username required";
    else if (!isUsernameUnique(formData.username)) newErrors.username = "Username taken";
    if (!formData.password) newErrors.password = "Password required";
    else if (formData.password.length < 6) newErrors.password = "Password min 6 chars";
    if (!formData.dob) newErrors.dob = "Date of birth required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({
      email: formData.email,
      username: formData.username,
      password: formData.password,
      dob: formData.dob.toLocaleDateString(),
      // extra fields will be added in UserDetails
    });
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Signed up successfully — continue with patient details");
    navigate("/user-details", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input name="email" value={formData.email} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-semibold mb-1">Username</label>
            <input name="username" value={formData.username} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="block font-semibold mb-1">Date of Birth</label>
            <DatePicker selected={formData.dob} onChange={handleDateChange} dateFormat="dd/MM/yyyy" maxDate={new Date()} className="w-full border px-3 py-2 rounded" />
            {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
          </div>

          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
