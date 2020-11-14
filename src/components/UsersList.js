import React, { useState } from "react";

const users = [
  { name: "Leo", lastName: "DiCaprio", birthDate: "1974-11-11" },
  { name: "Demi", lastName: "Moore", birthDate: "1962-11-11" },
  { name: "Calista", lastName: "Flockhart", birthDate: "1964-11-11" }
];

const UsersList = () => {
  const [state, setState] = useState([...users]);

  return (
    <div style={{ border: "1px solid darkgrey", padding: "12px", borderRadius:"8px", display:'flex', flexDirection:'column'}}>
      {state.map((user) => (
        <div style={{display:'flex', flexDirection:'row', padding:'4px', margin:4, border:'1px solid lightgrey'}} key={user.name}>
          <img style={{height:'50px', borderRadius:'25px', marginRight:10}} src='https://cdn.onlinewebfonts.com/svg/img_184513.png' alt='person'></img>
          <div style={{display:'flex', flexDirection:'column', marginTop:6}}>
          <div>{`${user.name} ${user.lastName}`}</div>
          <div>{`Birthday: ${user.birthDate}`}</div>
          </div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
