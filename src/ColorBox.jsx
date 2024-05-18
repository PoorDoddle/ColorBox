import { useState } from "react";
import "./ColorBox.css";
import { random } from "nanoid";

export default function ColorBox({ data }) {
  const [randCol, setRandCol] = useState(randomChoice(data));
  const randomNum = Math.ceil(Math.random() * data.length);
  const randomColour = data[randomNum];
  function randomChoice(arr) {
    const idx = Math.ceil(Math.random() * arr.length);
    return arr[idx];
  }
  function randomColor() {
    setRandCol(data[randomNum]);
  }
  return (
    <div
      onClick={randomColor}
      className="ColorBox"
      style={{ backgroundColor: randCol }}
    ></div>
  );
}
