import React from "react";

function DisplayUser(props) {
  const user = props.user;
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.location}</p>
      <p>{user.car}</p>
    </div>
  );
}

export default DisplayUser;
