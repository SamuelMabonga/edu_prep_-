import React from "react"

function FormComponent(props) {
  return (
    <main>
        <form>
          <input 
            name="firstName" 
            value={props.firstName} 
            onChange={props.handleChange} 
            placeholder="First Name" 
          />
          <br />
          <input 
            name="lastName" 
            value={props.lastName} 
            onChange={props.handleChange} 
            placeholder="Last Name" 
          />
          <br />
          <input 
            name="age" 
            value={props.Age} 
            onChange={props.handleChange} 
            placeholder="Age" 
          />
          <br />

          <label>
            <input 
              type="radio" 
              name="gender"
              value="male"
              checked={props.gender === "male"}
              onChange={props.handleChange}
              /> Male
          </label>

          <br />

          <label>
            <input 
              type="radio" 
              name="gender"
              value="female"
              checked={props.gender === "female"}
              onChange={props.handleChange}
              /> Female
          </label>

          <br />

          <select 
            value={props.destination} 
            name="destination"
            onChange={props.handleChange}
          >
            <option value="">-- Please choose a destination --</option>
            <option value="kampala">Kampala</option>
            <option value="masaka">Masaka</option>
            <option value="mbale">Mbale</option>
            <option value="kalangala">Kalangala</option>
          </select>

          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={props.handleChange}
              checked={props.dietaryRestrictions.isVegan}
            />Is Vegan
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={props.handleChange}
              checked={props.dietaryRestrictions.isKosher}
            />Is Kosher
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={props.handleChange}
              checked={props.dietaryRestrictions.isLactoseFree}
            />Is Lactose Free
          </label>

          <br />
          <br />


          <button>Submit</button>
        </form>

        <hr/>
        
        <h2>Entered Infomation:</h2>
        <p>Your name: {props.firstName} {props.lastName}</p>
        <p>Your age: {props.age} </p>
        <p>Gender: {props.gender} </p>
        <p>Your destination: {props.destination} </p>
        <p>Your dietary restrictions:</p>
        <p>Vegan: {props.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
        <p>Kosher: {props.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
        <p>Lactose Free: {props.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>

      </main>
  )
}

export default FormComponent