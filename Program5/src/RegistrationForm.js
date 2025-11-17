import React, { useState } from "react";


export default function RegistrationForm() {
  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  // errors state: stores messages for each field
  const [errors, setErrors] = useState({});

  // simple regexes
  const emailRegex = /^\S+@\S+\.\S+$/; // basic email check
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  // password must be at least 8 chars and contain at least one letter and one digit

  // handle input change (keeps other fields using spread operator)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // validate form and build newErrors object
  const validate = () => {
    const newErrors = {};

    // name: required + min length 3
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // email: required + regex
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Email is invalid";
    }

    // password: required + regex
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password =
        "Password must be at least 8 chars and include a letter and a number";
    }

    // save errors to state so UI can show them
    setErrors(newErrors);

    // return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // reset form and errors
      setForm({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "20px auto", fontFamily: "sans-serif" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div style={{ marginBottom: 8 }}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            style={{ width: "100%", padding: 8 }}
          />
          {errors.name && (
            <div style={{ color: "red", marginTop: 4 }}>{errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: 8 }}>
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", padding: 8 }}
          />
          {errors.email && (
            <div style={{ color: "red", marginTop: 4 }}>{errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: 12 }}>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={{ width: "100%", padding: 8 }}
          />
          {errors.password && (
            <div style={{ color: "red", marginTop: 4 }}>{errors.password}</div>
          )}
        </div>

        <button type="submit" style={{ padding: "8px 14px" }}>
          Register
        </button>
      </form>
    </div>
  );
}
