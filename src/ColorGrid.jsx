import { random } from "nanoid";
import ColorBox from "./ColorBox";
import "./ColorGrid.css";

export default function ColorGrid({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox data={colors} />);
  }
  return <div className="ColorGrid">{boxes}</div>;
}
