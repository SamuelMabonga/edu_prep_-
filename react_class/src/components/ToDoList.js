import React from "react"
import toDos from "./todosData"
import ToDoItem from "./ToDoItem"

// function ToDoList() {
//   const ToDos = toDos.map(item => {
//     return (
//       <ToDoItem 
//         key={item.id}
//         toDo={item}
//       />
//     )
//   })

//   return (
//     <div className="todo-list">
//       {ToDos}
//     </div>
//   )

// }

class ToDoList extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: toDos
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    // console.log(this.state.todos.filter(todo => {
    //   return (
    //     todo.id === id
    //   )
    // }))

    this.setState(prevState => {
      const updatedToDos = prevState.todos.map(toDo => {
        if (toDo.id === id) {
          return {
            ...toDo,
            completed: !toDo.completed
          }
        }
        return toDo
      })

      // console.log(prevState.todos)
      // console.log(updatedToDos)
      
      return {
        todos: updatedToDos
      }
    })

    // console.log(this.state.todos.filter(todo => {
    //   return (
    //     todo.id === id
    //   )
    // }))

  }

  render() {
    const ToDos = this.state.todos.map(toDo => {
      return (
        <ToDoItem
          key={toDo.id}
          id={toDo.id}
          item={toDo.text}
          completed={toDo.completed}
          handleChange={this.handleChange}
        />
      )
    })

    return (
      <div>
        {ToDos}
      </div>
    )
  }
}

export default ToDoList