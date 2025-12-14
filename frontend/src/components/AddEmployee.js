import { useState } from 'react';
import axios from 'axios';

export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    EmployeeName: '', EmployeeID: '', Designation: '', Department: '', JoiningDate: ''
  });

  const handleChange = e => setEmployee({ ...employee, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('https://employee-management-eyyv.onrender.com/api/employees', employee);
    alert('Employee added successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="EmployeeName" placeholder="Name" onChange={handleChange} />
      <input name="EmployeeID" placeholder="ID" onChange={handleChange} />
      <input name="Designation" placeholder="Designation" onChange={handleChange} />
      <input name="Department" placeholder="Department" onChange={handleChange} />
      <input name="JoiningDate" type="date" onChange={handleChange} />
      <button type="submit">Add Employee</button>
    </form>
  );
}
