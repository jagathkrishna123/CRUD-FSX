import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Read from "./components/Read";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/read">Students</Link>
        <Link to="/create">Add Student</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;