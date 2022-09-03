import Row from "./Row";

interface GridProps {
  dimensions: Record<string, number>,
  colors: Array<string>,
}

export default function Grid({ dimensions, colors }: GridProps): JSX.Element {
  const rows: Array<JSX.Element> = [];

  for (let i = 0; i < dimensions.rows; i++) {
    rows.push(
      <Row count={dimensions.perRow} colors={colors} row={i} key={`row${i}`} />
    );
  }

  return <div className="grid">{rows}</div>;
}
