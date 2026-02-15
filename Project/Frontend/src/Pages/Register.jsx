import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      //()--- this is used to return from arrow function
      ...prev,
      [e.target.name]: [e.target.value], //here,property like name,email are dynamic so we cannot write e.target.name as JS will not understand this so when we use [e.target.name] JS first evalutes e.target.name then it will set it's value
    }));
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  };

  return (
    <>
      <div className="register-form">
        <h2>
          <FaUser /> Register
        </h2>
        <p>Create new account</p>
        <form onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Enter Your Name..."
            value={name}
            name="name"
            onChange={onChange}
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email..."
            value={email}
            name="email"
            onChange={onChange}
            required
          />
          <input
            type="Password"
            placeholder="Enter Your Password..."
            value={password}
            name="password"
            onChange={onChange}
            required
          />
          <input
            type="Password"
            placeholder="Confirm Password..."
            value={password2}
            name="password2"
            onChange={onChange}
            required
          />
        </form>
      </div>
    </>
  );
};

export default Register;
