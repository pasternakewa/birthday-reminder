import React, { useState } from "react";

const users = [
  { name: "Leo", lastName: "DiCaprio", birthDate: "1974-11-11" },
  { name: "Demi", lastName: "Moore", birthDate: "1962-11-11" },
  { name: "Calista", lastName: "Flockhart", birthDate: "1964-11-11" }
];

const UsersList = () => {
  const [state, setState] = useState([...users]);

  return (
    <div>
      <div
        style={{
          border: "1px solid darkgrey",
          padding: "12px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {state.map((user) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "4px",
              margin: 4,
              border: "1px solid lightgrey"
            }}
            key={user.name}
          >
            <img
              style={{ height: "50px", borderRadius: "25px", marginRight: 10 }}
              src="https://cdn.onlinewebfonts.com/svg/img_184513.png"
              alt="person"
            ></img>
            <div
              style={{ display: "flex", flexDirection: "column", marginTop: 6 }}
            >
              <div>{`${user.name} ${user.lastName}`}</div>
              <div>{`Birthday: ${user.birthDate}`}</div>
            </div>
            <button className="user-button">
              <img
                style={{ height: "32px", borderRadius: "16px" }}
                src="https://www.kindpng.com/picc/m/79-793180_edit-round-icon-png-png-download-round-edit.png"
                alt="sa"
              ></img>
            </button>
            <button className="user-button">
              <img
                style={{ height: "28px", borderRadius: "14px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMdX3UpUCzG50K3uTFEIb13KZVkmsMESwM3Jf5wZ8-ksXIJ6PuuH6ksWKh3KzCk3t1nB1y0v4KcAlUISdkVpGqwJBx0sgpdviai-hylbI&usqp=CAU&ec=45725302"
                alt="sa"
              ></img>
            </button>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default UsersList;
