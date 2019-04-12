import React, { Component } from "react"
import "./calculator.css"
import Display from "./Display"
import Key from "./Key"

class CalculatorBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyNameValue: null,
      displayValue: null,
    }
  }

  calculateAnswer = keyName => {
    console.log("you pressed the ", keyName)
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="calculator">
          <Display />
          <div className="key-grid">
            <Key
              className="keys"
              keyName={"AC"}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={"+/-"}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={"%"}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={"/"}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={7}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={8}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={9}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={"x"}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={4}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={5}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={6}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={"-"}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={1}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={2}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={3}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={"+"}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={0}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={"."}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={"="}
              calculateAnswer={this.calculateAnswer}
            />
            <Key
              className="keys"
              keyName={"=="}
              calculateAnswer={this.calculateAnswer}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CalculatorBody
