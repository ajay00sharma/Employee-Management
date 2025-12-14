import { useState } from 'react';
import axios from 'axios';

export default function DeleteEmployee() {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    if (!id) return alert('Please enter Employee ID');
    try {
      await axios.delete(`https://employee-management-eyyv.onrender.com/api/employees/${id}`);
      alert('Employee deleted successfully');
      setId('');
    } catch (error) {
      alert('Employee not found');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Delete Employee</h2>
      <input
        placeholder="Enter Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button onClick={handleDelete} style={{ padding: '8px 16px' }}>
        Delete
      </button>
    </div>
  );
}
