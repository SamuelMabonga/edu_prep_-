import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

function JokeComponents() {
  const JokeComponents = jokesData.map(joke => {
    return (
        <Joke 
          key={joke.id}
          question={joke.question}
          answer={joke.answer}
        />
    )
  })

  return (
    <div>
      {JokeComponents}
    </div>
  )
}

export default JokeComponents
