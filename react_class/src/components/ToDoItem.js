import React from "react"

// function ToDoItem(props) {
//   console.log(props)
//   return (
//     <div className="todo-item">
//       <input type="checkbox" checked={props.completed} onChange={() => props.handleChange(props.id)}/>
//       <p>{props.item}</p>
//     </div>
//   )
// }

class ToDoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
    }

    return (
      <div className="todo-item">
        <input 
          type="checkbox" 
          checked={this.props.completed} 
          onChange={() => this.props.handleChange(this.props.id)}
        />
        <p style={this.props.completed ? completedStyle : null}>
          {this.props.item}
        </p>
      </div>
    )
  }
}

export default ToDoItem