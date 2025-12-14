import { useState } from 'react';
import axios from 'axios';

export default function UpdateEmployee() {
  const [id, setId] = useState('');
  const [designation, setDesignation] = useState('');

  const handleUpdate = async () => {
    try {
      await axios.put(`https://employee-management-eyyv.onrender.com/api/employees/${id}`, { Designation: designation });
      alert('Designation updated successfully');
    } catch {
      alert('Employee not found');
    }
  };

  return (
    <div>
      <input placeholder="Employee ID" value={id} onChange={e => setId(e.target.value)} />
      <input placeholder="New Designation" value={designation} onChange={e => setDesignation(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
