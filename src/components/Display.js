import React from "react"

const Display = props => {
  return (
    <div className="display">
      {props.displayNumber !== 0 ? props.displayNumber : props.keysPressed}
    </div>
  )
}

export default Display
