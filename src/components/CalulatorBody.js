import React, { Component } from "react"
import "./calculator.css"
import Display from "./Display"
import Key from "./Key"

class CalculatorBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keysPressed: 0,
      displayValue: 0,
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
      this.setState({ displayValue: this.state.keysPressed })
    } else {
      this.setState({
        keyNameFunction: keyName,
      })
    }
  }

  // calculateAnswer = keyNameFunction => {
  //   let keysPressed = parseInt(this.state.keysPressed)
  //   console.log({ keyNameFunction })
  //   let displayValue = this.state.displayValue
  //   let answer = this.state.answer
  //   switch (keyNameFunction) {
  //     case "+":
  //       displayValue = +keysPressed
  //       {
  //         console.log("displayvalue in +", displayValue)
  //       }
  //       // this.setState({ displayValue: displayValue })
  //       break
  //     case "-":
  //       displayValue = displayValue - keysPressed
  //       break
  //     case "x":
  //       displayValue = displayValue * keysPressed
  //       break
  //     case "/":
  //       displayValue = displayValue / keysPressed
  //       break
  //     case "AC":
  //       displayValue = 0
  //       keysPressed = 0
  //       break
  //     default:
  //       displayValue = "hi"
  //   }
  //   this.setState({
  //     displayValue: displayValue,
  //     keysPressed: keysPressed,
  //   })
  //   console.log(
  //     { keysPressed },
  //     { keyNameFunction },
  //     { answer },
  //     { displayValue }
  //   )
  // }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="calculator">
          <Display
            keysPressed={this.state.keysPressed}
            keyNameFunction={this.state.keyNameFunction}
            displayValue={this.state.displayValue}
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
