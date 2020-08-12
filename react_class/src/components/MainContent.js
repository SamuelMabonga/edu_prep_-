import React from "react"
import ToDoList from "./ToDoList"
import Contacts from "./Contacts"
import JokeComponents from "./JokeComponents"
import Products from "./Products"

function MainContent() {

  const firstName = "Bob"
  const lastName = "Ziroll"

  const date = new Date(2018, 6, 31, 15)
  const hours = date.getHours()
  let timeOfDay


  const styles = {
    fontSize: 30
  }


  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#2E0927"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }

  return (
    <div>
      <div>
        <ToDoList />
      </div>

      <div>
        <Contacts />
      </div>

      <h1>Hello {`${firstName} ${lastName}`}</h1>

      <h1>It is currently about {date.getHours() % 12} o'clock!</h1>

      <h1 style={styles}>Good {timeOfDay}!</h1>

      <JokeComponents />

      <Products />
    </div>
  )
}

export default MainContent