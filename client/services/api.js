import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getStudents = () => API.get("/students");
export const createStudent = (data) => API.post("/students", data);
export const updateStudent = (id, data) => API.put(`/students/${id}`, data);
export const deleteStudent = (id) => API.delete(`/students/${id}`);

// import axios from "axios";

// export const getStudents = () =>
//   axios.get("http://localhost:5000/api/students");

// export const createStudent = (data) =>
//   axios.post("http://localhost:5000/api/students", data);

// export const updateStudent = (id, data) =>
//   axios.put(`http://localhost:5000/api/students/${id}`, data);

// export const deleteStudent = (id) =>
//   axios.delete(`http://localhost:5000/api/students/${id}`);