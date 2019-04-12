import React, { Component } from "react"
import "./calculator.css"
import Display from "./Display"
import Key from "./Key"

class CalculatorBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyValue: null,
      displayValue: null,
    }
  }

  calculateAnswer = () => {
    console.log("hi")
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="calculator">
          <Display />
          <div className="key-grid">
            <Key className="keys" number={"AC"} />
            <Key className="keys" number={"+/-"} />
            <Key className="keys" number={"%"} />
            <Key className="keys" number={"/"} />
            <Key className="keys" number={7} />
            <Key className="keys" number={8} />
            <Key className="keys" number={9} />
            <Key className="keys" number={"x"} />
            <Key className="keys" number={4} />
            <Key className="keys" number={5} />
            <Key className="keys" number={6} />
            <Key className="keys" number={"-"} />
            <Key className="keys" number={1} />
            <Key className="keys" number={2} />
            <Key className="keys" number={3} />
            <Key className="keys" number={"+"} />
            <Key className="keys" number={0} />
            <Key className="keys" number={"."} />
            <Key className="keys" number={"="} />
            <Key className="keys" number={"="} />
          </div>
        </div>
      </div>
    )
  }
}

export default CalculatorBody
