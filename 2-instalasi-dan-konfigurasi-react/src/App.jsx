import { useState } from "react";
import MyCounter from "./components/MyCounter";

function App() {
  const [counter, setCounter] = useState(0);

  function MyBtn({ text }) {
    const myStyle = text !== "Reset" ? {} : { margin: 20, display: "block" };

    if (counter == 10 || counter < 0) {
      return (
        <button
          onClick={text == "-" ? decreament : increament}
          style={myStyle}
          disabled
        >
          {text}
        </button>
      );
    } else {
      return (
        <button onClick={text == "-" ? decreament : increament} style={myStyle}>
          {text}
        </button>
      );
    }
  }

  function ResetBtn() {
    if (counter == 10 || counter < 0) {
      return <button onClick={reset}>Reset</button>;
    } else {
      return (
        <button onClick={reset} disabled>
          Reset
        </button>
      );
    }
  }

  function increament() {
    setCounter(counter + 1);
  }

  function decreament() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <>
      <MyBtn text={"-"} onClick={decreament} counter={counter} />
      <MyCounter counter={counter} />
      <MyBtn text={"+"} onClick={increament} counter={counter} />
      <ResetBtn text={"Reset"} onClick={reset} counter={counter} />
    </>
  );
}

export default App;
