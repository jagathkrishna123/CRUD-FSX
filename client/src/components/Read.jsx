import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteStudent, getStudents } from "../../services/api";

export default function Read() {
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
      <h1 className="text-2xl font-bold mb-4">Student List</h1>

      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        students.map((s) => (
          <div
            key={s._id}
            className="p-4 bg-white shadow mb-3 flex justify-between rounded"
          >
            <div>
              <h3 className="font-bold text-lg">{s.name}</h3>
              <p>{s.email}</p>
              <p className="text-gray-500">{s.course}</p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to={`/edit/${s._id}`}
                className="bg-yellow-400 px-3 py-1 rounded"
              >
                Edit
              </Link>

              <button
                onClick={async () => {
                  await deleteStudent(s._id);
                  fetchStudents();
                }}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}