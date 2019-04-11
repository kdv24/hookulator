import React, { Component } from "react"
import "./calculator.css"
import Display from "./Display"

class CalulatorBody extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="calculator">
          <Display />
        </div>
      </div>
    )
  }
}

export default CalulatorBody
