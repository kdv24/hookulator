import React from "react"
// needs to take the keyNameValue

const Display = props => {
  console.log(typeof props.keyNameValue)
  return (
    <div className="display">
      {typeof props.keyNameValue === "number"
        ? props.keyNameValue
        : "not a number"}
    </div>
  )
}

export default Display
