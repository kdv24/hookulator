import React, { Component } from "react"
import "./calculator.css"
import Display from "./Display"
import Key from "./Key"

class CalculatorBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyNameValue: 0,
      displayValue: 0,
      keyNameFunction: "AC",
      answer: 0,
    }
  }

  checkKeyType = keyName => {
    if (typeof keyName === "number") {
      this.setState({
        keyNameValue: keyName,
      })
    } else {
      this.setState({
        keyNameFunction: keyName,
      })
    }
    this.calculateAnswer()
  }

  calculateAnswer = () => {
    let keyNameValue = this.state.keyNameValue
    let keyNameFunction = this.state.keyNameFunction
    let displayValue = this.state.displayValue
    let answer = this.state.answer
    switch (keyNameFunction) {
      case "+":
        displayValue = displayValue + keyNameValue
        break
      case "-":
        displayValue = displayValue - keyNameValue
        break
      case "x":
        displayValue = displayValue * keyNameValue
        break
      case "/":
        displayValue = displayValue / keyNameValue
        break
      default:
        displayValue = answer
    }
    this.setState({
      displayValue: displayValue,
    })
    console.log(
      { keyNameValue },
      { keyNameFunction },
      { answer },
      { displayValue }
    )
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="calculator">
          <Display
            keyNameValue={this.state.keyNameValue}
            keyNameFunction={this.state.keyNameFunction}
            answer={this.state.answer}
          />
          <div className="key-grid">
            <Key
              className="keys"
              keyName={"AC"}
              checkKeyType={this.checkKeyType}
              keyNameValue={this.state.keyNameValue}
            />
            <Key
              className="keys"
              keyName={"+/-"}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={"%"}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={"/"}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={7}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={8}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={9}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={"x"}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={4}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={5}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={6}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={"-"}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={1}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={2}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={3}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={"+"}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={0}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="keys"
              keyName={"."}
              checkKeyType={this.checkKeyType}
            />
            <Key
              className="equalButton"
              style={{ color: "red" }}
              keyName={"="}
              checkKeyType={this.checkKeyType}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CalculatorBody
