import { useEffect, useState } from "react";
import ColorPicker from "./ColorPicker";

export default function Hexie({ color }): JSX.Element {
  const [hexColor, setHexColor] = useState(color);

  useEffect(() => {
    setHexColor(color);
  }, [color]);

  return <ColorPicker color={hexColor} onChange={setHexColor} type="hexie" />;
}
