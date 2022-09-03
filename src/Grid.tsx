import Row from "./Row";

export default function Grid({ dimensions, colors }): JSX.Element {
  const rows: Array<JSX.Element> = [];

  for (let i = 0; i < dimensions.rows; i++) {
    rows.push(
      <Row count={dimensions.perRow} colors={colors} row={i} key={`row${i}`} />
    );
  }

  return <div className="grid">{rows}</div>;
}
