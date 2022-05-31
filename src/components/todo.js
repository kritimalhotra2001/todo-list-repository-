import React, { useState } from "react";
import ShowtToDo from "./ShowtToDo";
function Todo() {
  const [task, setTask] = useState("add some task");
  const [data, setData] = useState([]);
  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newData = task;
    setData([...data, newData]);

    setTask(""); //why did we do this and how did this work?
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white">
            <div className="col  p-2">
              <h4 className="text-center">Todo App Using React JS</h4>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="row justify-content-between text-white p-2">
              <div className="form-group flex-fill mb-2 col-9">
                {/*<input
                  id="todo-input"
                  type="text"
                  className="form-control"
                  value={task}
                  onChange={onChangeHandler}
  />*/}
              </div>
              <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">
                Add todo
              </button>
            </div>
          </form>

          {data.map((value, index) => {
            <ShowToDo key={index} id={index} task={value} />;
          })}
          <input
            id="todo-input"
            type="text"
            className="form-control"
            value={task}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;

{
  /*<div className="container">
          <div className="row justify-content-center align-items-center main row">
           <div className="col shadow main-col bg-white">
              <div className="row bg-primary text-white">
                  <div className="col-p2">
                      <h4 className="text-center">Todo app</h4>
                      </div> 
                </div>
                      
<form onSubmit={submitHandler}>
    <div className="row justify-content-between text-white p-2">
  </div>

    <input
      id="todo-input"
      type="text"
      className="form-control"
      value={task}
      onChange={onChangeHandler}
    />
</div>


 {/*<input
      id="todo-input"
      type="text"
      className="form-control"
      value={task}
      onChange={onChangeHandler}/>
  );
 
}*/
}
