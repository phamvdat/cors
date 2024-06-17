'use client';

import axios from 'axios';

const endpoint = 'http://localhost:8000/api/user';

const UserPage = () => {
  const getUser = async () => {
    const userId = '1';
    try {
      const { data } = await axios.get(`${endpoint}/${userId}`);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async () => {
    const user = {
      name: 'John Doe',
      email: '',
      age: 24,
    };
    try {
      const { data } = await axios.post(`${endpoint}/createUser`, user);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async () => {
    const userId = '1';
    const user = {
      name: 'John Doe',
      email: '',
      age: 24,
    };
    try {
      const { data } = await axios.put(
        `${endpoint}/updateUser/${userId}`,
        user
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async () => {
    const userId = '1';
    try {
      const { data } = await axios.delete(`${endpoint}/deleteUser/${userId}`);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <div>
        <h5>Api GET</h5>
        <button onClick={() => getUser()}>Get User</button>
      </div>
      <div>
        <h5>Api POST</h5>
        <button onClick={() => createUser()}>Create User</button>
      </div>
      <div>
        <h5>Api PUT</h5>
        <button onClick={() => updateUser()}>Update User</button>
      </div>
      <div>
        <h5>Api DELETE</h5>
        <button onClick={() => deleteUser()}>Delete User</button>
      </div>
    </div>
  );
};

export default UserPage;
