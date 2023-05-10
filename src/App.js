import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import AddWork from "./components/addWork";
import AllWorks from "./components/allWorks";
class App extends Component {
  state = {
    data: [],
  };
  AddnewWork = (text) =>{
    const newWork = text();
    const works = [...this.state.data];
    let newTask = {id:Math.random()*100,work: newWork,isComplate: false};
    works.push(newTask);
    this.setState({data: works});
  };
  handleDeleteTask = (task) =>{
    let data = [...this.state.data];
    data = data.filter(t=>t.id !== task.id);
    this.setState({data});
  };
  handleDoTask = (task) =>{
    let data = [...this.state.data];
    const index = data.indexOf(task);
    data[index] = {...data[index]};
    data[index].isComplate = !data[index].isComplate;
    this.setState({data});
  };
  
  render() {
    const {data} = this.state;
    return (
      <div className="d-flex pt-5 justify-content-center container">
        <div className="col-md-8">
          <AllWorks compTask={this.handleDoTask} onDelete={this.handleDeleteTask} data={data} />
          <AddWork adding={this.AddnewWork} />
        </div>
      </div>
    );
  }
}
export default App;
