import React, { Component } from "react"
import "./calculator.css"
import Display from "./Display"
import Key from "./Key"

class CalculatorBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keysPressed: 0,
      displayNumber: 0,
      keyNameFunction: undefined,
      answer: 0,
    }
  }

  checkKeyType = keyName => {
    if (typeof keyName === "number") {
      let keysPressed = this.state.keysPressed
      this.setState({
        keysPressed:
          this.state.keysPressed === 0 ? keyName : `${keysPressed}${keyName}`,
      })
    } else {
      this.setState({
        keyNameFunction: keyName,
        displayNumber: this.state.keysPressed,
        keysPressed: 0,
      })
      this.calculateAnswer(keyName)
    }
  }

  calculateAnswer = keyName => {
    let keysPressed = parseInt(this.state.keysPressed)
    let displayNumber = this.state.displayNumber
    switch (keyName) {
      case "+":
        displayNumber = displayNumber + keysPressed
        this.setState({ displayNumber: displayNumber })
        break
      case "-":
        displayNumber = displayNumber - keysPressed
        break
      case "x":
        displayNumber = displayNumber * keysPressed
        break
      case "/":
        displayNumber = displayNumber / keysPressed
        break
      case "AC":
        displayNumber = 0
        keysPressed = 0
        break
      default:
        displayNumber = "hi"
    }
    this.setState({
      displayNumber: displayNumber,
      keyNameFunction: keyName,
    })
    console.log(
      "end of calculate; display number & function: ",
      displayNumber,
      this.state.keyNameFunction
    )
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="calculator">
          <Display
            keysPressed={this.state.keysPressed}
            keyNameFunction={this.state.keyNameFunction}
            displayNumber={this.state.displayNumber}
          />
          <div className="key-grid">
            <Key
              className="keys"
              keyName={"AC"}
              checkKeyType={this.checkKeyType}
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
              keysPressed={this.state.keysPressed}
            />
            <Key
              className="keys"
              keyName={8}
              checkKeyType={this.checkKeyType}
              keysPressed={this.state.keysPressed}
            />
            <Key
              className="keys"
              keyName={9}
              checkKeyType={this.checkKeyType}
              keysPressed={this.state.keysPressed}
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
