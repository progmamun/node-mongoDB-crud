import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>Update User: {id}</h3>
    </div>
  );
};

export default UpdateUser;
