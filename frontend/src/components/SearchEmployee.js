import { useState } from 'react';
import axios from 'axios';

export default function SearchEmployee() {
  const [id, setId] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/employees/${id}`);
      setResult(JSON.stringify(res.data, null, 2));
    } catch {
      setResult('Employee not found');
    }
  };

  return (
    <div>
      <input placeholder="Enter Employee ID" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <textarea rows="6" cols="50" value={result} readOnly />
    </div>
  );
}
