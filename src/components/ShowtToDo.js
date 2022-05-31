import React from "react";

function ShowtToDo(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h6>{props.task}</h6>
        </div>
      </div>
      <div className="col-6">
        <button>x</button>
      </div>
    </div>
  );
}

export default ShowtToDo;
