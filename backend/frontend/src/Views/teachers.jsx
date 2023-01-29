import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  
  useEffect(() => {
    axios
      .get('/teachers/')
      .then(res => setTeachers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>lieu</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr key={teacher.email}>
              <td>{teacher.firstName} {teacher.lastName}</td>
              <td>{teacher.email}</td>
              <td>{teacher.telephone}</td>
              <td>{teacher.lieu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherList;
