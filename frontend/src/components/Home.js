import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Employee Management System</h2>
      <Link to="/add">Add Employee</Link> |{" "}
      <Link to="/search">Search Employee</Link> |{" "}
      <Link to="/update">Update Employee</Link> |{" "}
      <Link to="/delete">Delete Employee</Link>

    </div>
  );
}
