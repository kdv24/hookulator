import React from "react"

const Display = props => {
  console.log("display knows keysPressed to be: ", props.keysPressed)
  console.log("display knows keyNameFunction to be: ", props.keyNameFunction)
  console.log("display holds this as displayNumber: ", props.displayNumber)
  return (
    <div className="display">
      {props.displayNumber !== 0 ? props.displayNumber : props.keysPressed}
    </div>
  )
}

export default Display
