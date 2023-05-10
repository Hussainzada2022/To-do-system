import React from "react";
const Work = (props) => {
  let doTask = "toDoList";
  if (props.finishTask) {
    doTask = "toDoList complete";
  }
  return (
    <div className={doTask}>
      <div className="text">{props.work}</div>
      <div className="controlText">
        <button
          onClick={props.endTask}
          className="border-0 btn-transition btn btn-outline-success"
        >
          <i className="fa fa-check"></i>
        </button>
        <button
          onClick={props.deleteTask}
          className="border-0 btn-transition btn btn-outline-danger"
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};
export default Work;
