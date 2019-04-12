import React from "react"
const Key = props => {
  console.log("keynamevalue: ", props.keyNameValue)
  return (
    <div className="keys" onClick={() => props.calculateAnswer(props.keyName)}>
      {props.keyName}
    </div>
  )
}

export default Key
