import "./styles.css";

import { useState } from "react";
import ColorPicker from "./ColorPicker";
import Grid from "./Grid";

export default function App() {
  const defaultSize = 25;
  const defaultColors = ["#e74645", "#fb7756", "#facd60", "#fdfa66", "#1ac0c6"];

  const [rows, setRows] = useState(defaultSize);
  const [perRow, setPerRow] = useState(defaultSize);
  const [colors, setColors] = useState(defaultColors);
  const grid = { rows, perRow };

  const changeColor = (index: number): ((color: string) => void) => {
    return (newColor: string) => {
      const updatedColors = [...colors];
      updatedColors[index] = newColor;
      console.log(colors);
      setColors(updatedColors);
    };
  };

  const addColor = (): void => {
    const updatedColors = [...colors];
    updatedColors.push("#fff");
    setColors(updatedColors);
  };

  return (
    <div className="App">
      <div className="options">
        <label>
          Rows:{" "}
          <input
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
          />
        </label>
        <label>
          {" "}
          Hexies Per Row:{" "}
          <input
            value={perRow}
            onChange={(e) => setPerRow(Number(e.target.value))}
          />{" "}
        </label>
        <div className="colors">
          Colors:
          {colors.map((color, i) => {
            return (
              <ColorPicker
                color={color}
                onChange={changeColor(i)}
                type="swatch"
                key={`swatch${i}`}
              />
            );
          })}
          <button onClick={addColor}>+</button>
        </div>
      </div>
      <Grid dimensions={grid} colors={colors} />
    </div>
  );
}
