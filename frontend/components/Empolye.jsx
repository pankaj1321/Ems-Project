import React, { useState, useEffect } from "react";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Empolye() {
  const [employee, setEmployee] = useState([]);
  const [handleEdit, setHandleEdit] = useState(null);
  const [formdata, setFromdata] = useState({
    name: "",
    email: "",
    role: "",
    salary: ""
  })

  //  handle change function
  const handleChange = (e) => {
    setFromdata(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // fetch employees function to get all employees
  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/employees");
      setEmployee(res.data.employees);
    } catch (error) {
      toast.error("failed to fetch employees");
    }
  }
  useEffect(() => {
    fetchEmployees();
  }, [])

  // handle submit function to add new employee
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (handleEdit) {
        const res = await axios.put(`http://localhost:5000/api/employees/${handleEdit}`, formdata);
        toast.success("Employee updated successfully");
      }
      else {

        const res = await axios.post("http://localhost:5000/api/employees", formdata);
        toast.success(res.data.message);
      }
      // Reset form data after submission
      setFromdata({
        name: "",
        email: "",
        role: "",
        salary: ""
      })
      // Reset handleEdit state
      setHandleEdit(null);
      fetchEmployees();
    } catch (error) {
      toast.error("failed to add employee");

    }

  }
  // delete employee function
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/employees/${id}`);
      toast.success(res.data.message);
      fetchEmployees();
    } catch (error) {
      toast.error("failed to delete employee");

    }
  }

  const handleEditClick = (emp) => {
    setFromdata({
      name: emp.name,
      email: emp.email,
      role: emp.role,
      salary: emp.salary
    })
    setHandleEdit(emp._id);

  }


  return (
    <div className=" bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Employee Management</h1>

        {/* Form UI */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 border rounded w-full"
            value={formdata.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border rounded w-full"
            value={formdata.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            className="p-3 border rounded w-full"
            value={formdata.role}
            onChange={handleChange}
          />
          <input
            type="number"
            name="salary"
            placeholder="Salary"
            className="p-3 border rounded w-full"
            value={formdata.salary}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {handleEdit ? "Update Employee" : "Add Employee"}
          </button>
        </form>

        {/* Table UI */}
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Salary</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp) => (
              <tr key={emp._id} className="border-t">
                <td className="p-3"> {emp.name} </td>
                <td className="p-3"> {emp.email} </td>
                <td className="p-3"> {emp.role} </td>
                <td className="p-3"> {emp.salary} </td>
                <td className="p-3 text-center">
                  <button onClick={() => handleDelete(emp._id)} className="text-red-500 hover:underline">Delete</button>
                  <button onClick={() => handleEditClick(emp)} className="text-blue-500 hover:underline">Update</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
