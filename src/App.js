import React from "react";
import "./App.css";
import UsersList from "./components/UsersList";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <UsersList />
    </div>
  );
};

export default App;
