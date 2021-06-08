import React from "react";
import ReactDOM from "react-dom";
import * as operand from "./calculator";
//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{operand.add(1, 2)}</li>
    <li>{operand.multiply(2, 3)}</li>
    <li>{operand.subtract(7, 2)}</li>
    <li>{operand.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
