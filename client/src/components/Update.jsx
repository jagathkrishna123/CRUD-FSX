 


 import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStudents, updateStudent } from "../../services/api";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    const fetchStudent = async () => {
      const res = await getStudents();
      const student = res.data.find((s) => s._id === id);
      setForm(student);
    };

    fetchStudent();
  }, [id]);

  const handleUpdate = async () => {
    await updateStudent(id, form);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Edit Student</h1>

      <input
        value={form?.name || ""}
        className="border p-2 block mb-2 w-full"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        value={form?.email || ""}
        className="border p-2 block mb-2 w-full"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        value={form?.course || ""}
        className="border p-2 block mb-2 w-full"
        onChange={(e) => setForm({ ...form, course: e.target.value })}
      />

      <button
        onClick={handleUpdate}
        className="bg-green-500 text-white px-4 py-2"
      >
        Update
      </button>
    </div>
  );
}