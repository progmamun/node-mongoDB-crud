import React from 'react';

const AddUser = () => {
  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    // send data to the server
    fetch('', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    });
  };
  return (
    <div>
      <h2> Please add a new User</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
      </form>
    </div>
  );
};

export default AddUser;
