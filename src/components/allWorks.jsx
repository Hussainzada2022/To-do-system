import React from "react";
import Work from "./work";
const AllWorks = ({ data, onDelete, compTask }) => {
  return (
    <div className="cardList card">
      {data.length>0?data.map((item) => (
        <Work
          finishTask={item.isComplate}
          endTask={() => compTask(item)}
          deleteTask={() => onDelete(item)}
          key={item.id}
          work={item.work}
        />
      )):<div className="alert">
        <p className="text-center">You don't have any task for today</p>
        </div>}
    </div>
  );
};
export default AllWorks;
