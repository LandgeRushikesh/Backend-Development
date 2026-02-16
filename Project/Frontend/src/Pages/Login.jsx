import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      //()--- this is used to return from arrow function
      ...prev,
      [e.target.name]: e.target.value, //here,property like name,email are dynamic so we cannot write e.target.name as JS will not understand this so when we use [e.target.name] JS first evalutes e.target.name then it will set it's value
    }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(`Hello,${data.name.split(" ")[0]} your logged in...`);
        navigate("/");
      }
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="register-form w-1/3 h-auto   flex flex-col justify-center items-start px-3 py-4 shadow-lg shadow-black rounded-lg">
          <h2 className="w-full flex justify-center items-center text-4xl text-indigo-600 font-extrabold hover:text-indigo-800 cursor-pointer mb-3">
            <FaUser />
            Login
          </h2>
          <form
            onSubmit={registerUser}
            className="flex flex-col justify-center items-start w-full"
          >
            <label
              htmlFor="email"
              className="text-md font-semibold text-slate-700 mt-2"
            >
              Enter Your Email
            </label>
            <input
              type="email"
              placeholder="you@gmail.com"
              value={email}
              name="email"
              id="email"
              onChange={onChange}
              required
              className="w-full px-4 py-2 border-2 border-slate-400 rounded-md focus:outline-none"
            />
            <label
              htmlFor="password"
              className="text-md font-semibold text-slate-700 mt-2"
            >
              Enter Your Password
            </label>
            <input
              type="Password"
              placeholder="Enter Your Password"
              value={password}
              name="password"
              id="password"
              onChange={onChange}
              required
              className="w-full px-4 py-2 border-2 border-slate-400 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-full my-4 py-2 bg-black text-white font-semibold rounded-md"
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
