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
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log('success', data);
        alert('users added successfully!!');
      });
  };
  return (
    <div>
      <h2> Please add a new User</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddUser;
