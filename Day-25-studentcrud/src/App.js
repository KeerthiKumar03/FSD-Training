import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
let istudents = [{"name":"Keerthi","age":20,"grade":"S"},
                {"name":"Swathi","age":21,"grade":"A"},
                {"name":"Sadhan","age":22,"grade":"B"},
                {"name":"Upender","age":22,"grade":"B"},
                {"name":"Bittu","age":22,"grade":"B"}
              ];

function App() {
  let [students,setStudents]=useState(istudents);
  let [editIndex,setEditIndex] = useState(null);
  let [formData,setFormData] = useState({name:'',age:'',grade:''});
  let [search,setSearch]=useState("")
  let [ascending,setAscending]=useState(true);
  const handleDelete = (index) => {
    const updatedStudents = students.filter((s,i) => i != index);
    setStudents(updatedStudents);
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(students[index]);
  };
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleAdd = () => {
    setStudents([...students, formData]);
    setFormData({name:'',age:'',grade:''});
    alert("Student Added");
  }
  const handleUpdate = () => {
    const updatedStudents = students.map((s, i) => i ==editIndex ? formData : s);
    setStudents(updatedStudents);
    setEditIndex(null);
    setFormData({name:'',age:'',grade:''});
  }

  const filteredStudents=students.filter((s)=>s.name.toLowerCase().includes(search.toLowerCase()))
  const sortedStudents = [...filteredStudents].sort((a,b) => a.name.localeCompare(b.name))
  return (
    <div className="App">
      <input className="form=control" name="search" placeholder="Type to search" onChange={(e)=>setSearch(e.target.value)}></input>
      <div className="form">
        <h2>{editIndex==null?"Add Student":"Update Student"}</h2>
        <input className="form-control m-2" name="name" value={formData.name} onChange={handleChange} />
        <input className="form-control m-2" name="age" value={formData.age} onChange={handleChange} />
        <input className="form-control m-2" name="grade"value={formData.grade} onChange={handleChange} />
        {editIndex==null?<button className="btn btn-success m-2" onClick={()=>handleAdd()}>Add Student</button>
        :<button className="btn btn-warning m-2" onClick={()=>handleUpdate()}>Update Student</button>}
      </div>
      <h2>Student List</h2>
     <table className="table table-bordered">
      <thead>
        <th style={{cursor:"pointer"}} onClick = {()=>setAscending(!ascending)}>Name<i className="bi bi-arrow-up bi-arrow-down" ></i></th>
        <th>Age</th>
        <th>Grade</th>
        <th>Actions</th>
      </thead>
      <tbody>
        {filteredStudents.map((s,index)=>
         <tr>
          <td>{s.name}</td>
          <td>{s.age}</td>
          <td>{s.grade}</td>
          <td><button className="btn btn-primary m-2" onClick={()=>handleEdit(index)}>Edit</button>
          <button className="btn btn-danger" onClick={()=>handleDelete(index)}>Delete</button></td>
         </tr>
        )}
      </tbody>
     </table>
    </div>
  );
}

export default App;