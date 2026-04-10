import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../../services/api";

export default function Create() {
  const [form, setForm] = useState({ name: "", email: "", course: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createStudent(form);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Add Student</h1>

      <form onSubmit={handleSubmit} className="bg-white p-4 shadow">
        <input
          placeholder="Name"
          className="border p-2 block mb-2 w-full"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          className="border p-2 block mb-2 w-full"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Course"
          className="border p-2 block mb-2 w-full"
          onChange={(e) => setForm({ ...form, course: e.target.value })}
        />

        <button className="bg-blue-500 text-white px-4 py-2">
          Create
        </button>
      </form>
    </div>
  );
}