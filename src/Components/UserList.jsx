import  { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setListOfUser(res.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <>
      <h1>List of Users</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>Name:  {user.name} <br />Email Address: {user.email} <br /> Phone: {user.phone} <br /> Username: {user.username} </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
