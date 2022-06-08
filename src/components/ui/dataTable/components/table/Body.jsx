import Row from "./Row";

function Body({ data }) {
  const bodyElements = data.map((row, index) => <Row key={`${index}-${row[0]}`} row={row} />);

  return <tbody>{bodyElements}</tbody>;
}

export default Body;
