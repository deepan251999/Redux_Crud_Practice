import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [students, setStudents] = useState([]);
  const [updateId, setUpdateId] = useState(null);

  const studentCollection = collection(db, "student");

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getDocs(studentCollection);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !age) {
      alert("Please fill out both fields.");
      return;
    }

    const student = { name, age: parseInt(age) };
    try {
      if (updateId) {
        const studentDoc = doc(db, "student", updateId);
        await updateDoc(studentDoc, student);
        setUpdateId(null);
      } else {
        await addDoc(studentCollection, student);
      }
      setName("");
      setAge("");
      alert(updateId ? "Student updated!" : "Student added!");
      window.location.reload();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const studentDoc = doc(db, "student", id);
      await deleteDoc(studentDoc);
      alert("Student deleted!");
      setStudents(students.filter((student) => student.id !== id));
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleEdit = (student) => {
    setName(student.name);
    setAge(student.age);
    setUpdateId(student.id);
  };

  return (
    <>
      <h1>Firebase CRUD </h1>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='label_container'>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='label_container'>
          <label>Age</label>
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className='label_container'>
            <button type="submit">{updateId ? "Update" : "Add"} Student</button>
          </div>
        </form>

        <h1>Students List</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Edit Name</th>
            <th>Delete Name</th>
          </tr>
          {students.map((student) => (
            <tr key={student.id}>
              <td> {student.name}</td>
              <td>{student.age}</td>
              <td><button onClick={() => handleEdit(student)}>Edit</button></td>
              <td><button onClick={() => handleDelete(student.id)}>Delete</button></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default App;


