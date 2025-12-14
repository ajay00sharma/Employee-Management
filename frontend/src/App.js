import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/search" element={<SearchEmployee />} />
        <Route path="/delete" element={<DeleteEmployee />} />
        <Route path="/update" element={<UpdateEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
