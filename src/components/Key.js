import React from "react"
const Key = props => {
  return (
    <div
      className={props.className}
      onClick={() => props.checkKeyType(props.keyName)}
    >
      {props.keyName}
    </div>
  )
}

export default Key
