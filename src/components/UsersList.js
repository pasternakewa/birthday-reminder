import React, { useState } from "react";

const users = [
  { name: "Leo", lastName: "DiCaprio", birthDate: new Date("1974-11-11") },
  { name: "Demi", lastName: "Moore", birthDate: new Date("1962-11-11") },
  { name: "Calista", lastName: "Flockhart", birthDate: new Date("1964-11-11") }
];
const today = new Date();

const UsersList = () => {
  const [state, setState] = useState([...users]);

  return (
    <ul>
      {state.map((user) => (
        <li key={user.name}>
          <div>{`${user.name} ${user.lastName}`}</div>
          <div>{`age: ${
            today.getFullYear() - user.birthDate.getFullYear()
          }`}</div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
