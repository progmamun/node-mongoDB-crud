import React, { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Available Users</h3>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name}: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
