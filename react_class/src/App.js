import React, { useState, useEffect } from "react"
// import { render } from "@testing-library/react"

import randomcolor from "randomcolor"

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    setColor(randomcolor())
  }, [count])

  return (
    <div>
      <h1 style={{color: color}}>{count}</h1>
    </div>
  )
}


// function App() {
//   const [count, setCount] = useState(0)
//   const [color, setColor] = useState("")

//   function increment() {
//     setCount(prevCount => prevCount + 1)
//   }

//   function decrement() {
//     setCount(prevCount => prevCount - 1)
//   }

//   useEffect(() => {
//     setColor(randomcolor())
//   }, [count])

//   return (
//     <div>
//       <h1 style={{color: color}}>{count}</h1>
//       <button onClick={increment}>Increment!</button>
//       <button onClick={decrement}>Decrement!</button>
//     </div>
//   )
// }


// import Header from "./components/Header"
// import MemeGenerator from "./components/MemeGenerator"

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {}

//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <MemeGenerator />
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       lastName: "",
//       isFriendly: false,
//       gender: "",
//       favColor: "blue",
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     const {name, value, type, checked} = event.target
//     type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({[name]: value}) 
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input 
//           type="text" 
//           value={this.state.firstName} 
//           name="firstName" 
//           placeholder="First name" 
//           onChange={this.handleChange} 
//         />
//         <br />
//         <input 
//           type="text" 
//           value={this.state.lastName} 
//           name="lastName" 
//           placeholder="Last name" 
//           onChange={this.handleChange} 
//         />
//         <h1>{this.state.firstName} {this.state.lastName}</h1>

//         <textarea 
//           value={"Some default value"} 
//           onChange={this.handleChange}
//         />

//         <br />

//         <label>
//           <input 
//             type="checkbox"
//             name="isFriendly"
//             checked={this.state.isFriendly}
//             onChange={this.handleChange}
//           /> Is friendly
//         </label>

//         <br />

//         <label>
//           <input 
//             type="radio"
//             name="gender"
//             value="male"
//             checked={this.state.gender === "male"}
//             onChange={this.handleChange}
//           /> Male
//         </label>

//         <label>
//           <input 
//             type="radio"
//             name="gender"
//             value="female"
//             checked={this.state.gender === "female"}
//             onChange={this.handleChange}
//           /> Female
//         </label>

//         <br />

//         <h2>You are a {this.state.gender}</h2>

//         <br />

//         <label>Favorite Color:</label>
//         <select 
//           value={this.state.favColor}
//           onChange={this.handleChange}
//           name="favColor"
//         >
//           <option value="blue">Blue</option>
//           <option value="red">Red</option>
//           <option value="yellow">Yellow</option>
//           <option value="orange">Orange</option>
//           <option value="green">Green</option>
//         </select>

//         <br />
//         <h2>Your favorite color is {this.state.favColor}</h2>

//         <button>Submit</button>
//       </form>
//     )
//   }
// }


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       loading: false,
//       character: {}
//     }
//   }

//   componentDidMount() {
//     this.setState({
//       loading: true
//     })

//     fetch("https://swapi.dev/api/people/1")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           loading: false,
//           character: data
//         })
//       })
//       .catch(err => {
//         // Do something for an error here
//         console.log("Error Reading data " + err)
//       })
//   }

//   render() {
//     const text = this.state.loading ? "Loading..." : this.state.character.name
//     return (
//         <div>
//           {text}
//         </div>
//     )
//   }
// }

// import Conditional from "./components/Conditional"

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       unreadMessages: ["a", "b"],
//       isLoggedIn: false
//     }
//     this.handleClick = this.handleClick.bind(this)
    
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       }
//     })
//   }

//   render() {
//     let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"

//     let displayText = this.state.isLoggedIn ? "Logged In!" : "Logged Out!"
//     return (
//       <div>
//         <h1>{displayText}</h1>
//         <button onClick={this.handleClick}>{buttonText}</button>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state={
//       isLoading: true,
//     }
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 1500)
//   }

//   // &&
//   // true && false

//   render() {
//     return (
//       <div>
//         {
//           this.state.isLoading ? <h1>Loading...</h1> :
//           <Conditional />
//         }
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       answer: "Yes!!!",
//       isLoggedIn: false
//     }
//   }

//   render() {
//     let wordDisplay

//     if (this.state.isLoggedIn) {
//           wordDisplay = "in"
//     } else {
//           wordDisplay = "out"
//     }

//     return (
//       <div>
//         <h1>Is state important to know? {this.state.answer}</h1>
//         <br/>
//         <h2>You are currently logged {wordDisplay}!</h2>
//         <br/>
//         <ToDoList />
//         <br/>
//         <br/>
//         <LifeCycleMethods />
//         <br/>
//         <br/>
//       </div>
//     )
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}!</p>
//       </header>
//     )
//   }
// }

// class Greeting extends React.Component {
//   render() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay 

//     if (hours < 12) {
//       timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon"
//     } else {
//       timeOfDay = "night"
//     }

//     return (
//       <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
//   }
// }

export default App