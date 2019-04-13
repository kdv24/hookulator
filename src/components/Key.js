import React from "react"
const Key = props => {
  return (
    <div className="keys" onClick={() => props.checkKeyType(props.keyName)}>
      {props.keyName}
    </div>
  )
}

export default Key
