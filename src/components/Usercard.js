import React from "react";

function Usercard({ user }) {
  return (
    <div className="col-3 mt-3 ">
      <div className="card m-0">
        <img src={user.picture.large} className="card-img-top" alt=" " />
      </div>
      <div className="card-body">
        <p className="m-0">
          {user.name.title + " " + user.name.first + " " + user.name.last}
        </p>
        <p className="m-0">Age : {user.dob.age}</p>
        <p className="m-0">{user.email}</p>
        <p className="m-0">{user.phone}</p>
      </div>
    </div>
  );
}

export default Usercard;
