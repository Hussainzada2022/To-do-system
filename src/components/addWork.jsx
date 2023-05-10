import React, { useRef } from 'react';
function AddWork({adding}){
const text = useRef(null);
const showText =()=>{
    const inputValue =text.current.value;
    text.current.value = "";
    return inputValue;
}
    return(
        <div className="addTodo col-7 p-3" style={{ display: "flex" }}>
          <input name='text' ref={text} type="text"  className="form-control" />
          <button onClick={(fun)=>adding(showText)} className="fa fa-plus btn btn-secondary" />
        </div>
    )
}
export default AddWork;