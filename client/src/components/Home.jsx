import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteStudent, getStudents } from "../../services/api";

export default function Home() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">All Students</h1>

      {students.map((s) => (
        <div key={s._id} className="p-4 bg-white shadow mb-2 flex justify-between">
          <div>
            <h3 className="font-bold">{s.name}</h3>
            <p>{s.email}</p>
            <p>{s.course}</p>
          </div>

          <div>
            <Link
              to={`/edit/${s._id}`}
              className="bg-yellow-400 px-2 mr-2"
            >
              Edit
            </Link>

            <button
              onClick={() => {
                deleteStudent(s._id);
                fetchStudents();
              }}
              className="bg-red-500 text-white px-2"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}