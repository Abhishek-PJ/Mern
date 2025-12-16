
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/employees";

function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [editId, setEditId] = useState(null);

  // 🔹 Fetch all employees (READ)
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios.get(API_URL);
    setEmployees(response.data);
  };

  // 🔹 Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Add or Update employee (CREATE / UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`${API_URL}/${editId}`, formData);
      setEditId(null);
    } else {
      await axios.post(API_URL, formData);
    }

    setFormData({ firstName: "", lastName: "", email: "" });
    fetchEmployees();
  };

  // 🔹 Edit employee
  const handleEdit = (employee) => {
    setEditId(employee.id);
    setFormData({
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email
    });
  };

  // 🔹 Delete employee (DELETE)
  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchEmployees();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Management System</h2>

      {/* Employee Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {editId ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      <hr />

      {/* Employee List */}
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>
                <button onClick={() => handleEdit(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
