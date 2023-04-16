import { useState } from "react";
import * as math from "mathjs"; // import mathjs library
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [text, setText] = useState(""); // create state variable for input text
  const [result, setResult] = useState(""); // create state variable for result

  const addToText = (val) => {
    setText((text) => [...text, val + " "]); // update input text with new value
  };

  const calculateResult = () => {
    const input = text.join(""); // concatenate input values into one string
    setResult(math.evaluate(input)); // evaluate the input string using mathjs library and update result state
  };

  const resetInput = () => {
    setText(""); // reset input text state
    setResult(""); // reset result state
  };

  const buttonColor = "#f2a33c"; // define button color

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} /> {/* display input and result */}
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} /> {/* handle click and add to input text */}
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} /> {/* handle click and add to input text */}
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} /> {/* handle click and add to input text */}
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} /> {/* handle click and add to input text */}
        </div>
        <Button symbol="Clear" color="red" handleClick={resetInput} /> {/* reset input text and result states */}
      </div>
    </div>
  );
};

export default App;
