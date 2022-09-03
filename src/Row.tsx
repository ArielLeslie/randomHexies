import { useEffect } from "react";
import Hexie from "./Hexie";

interface RowProps {
  count: number;
  row: number;
  colors: Array<string>;
}

export default function Row({ count, colors, row }: RowProps): JSX.Element {
  const hexies: Array<JSX.Element> = [];

  const getColor = (): string => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  for (let i = 0; i < count - (row % 2); i++) {
    hexies.push(<Hexie key={`hexie${row}${i}`} color={getColor()} />);
  }

  return <div className="row">{hexies}</div>;
}
