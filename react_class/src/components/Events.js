import React from "react"

function handleClick() {
  console.log("I was clicked!")
}

function handleMouseEnter() {
  console.log("get out!!!!")
}


function Events() {
  return (
    <div>
      <img onMouseEnter={handleMouseEnter} src="https://www.fillmurray.com/200/100"/>
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Events