import React from "react"
const Key = props => {
  return (
    <div
      className="keys"
      onClick={() => {
        console.log(`you pressed the ${props.number} key.`)
      }}
    >
      {props.number}
    </div>
  )
}

export default Key
