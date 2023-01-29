import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDetail({ match }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`/users/${match.params.id}/`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [match.params.id]);

  return (
    <div>
      <h1>{user.firstName} {user.lastName}</h1>
      <p>Email: {user.email}</p>
      <p>Telephone: {user.telephone}</p>
      <p>Lieu: {user.lieu}</p>
      <p>isTeacher: {user.isTeacher}</p>
    </div>
  );
}

export default UserDetail;
