import useDataTableContext from "../../hooks/useDataTableContext";
import Label from "./Label";

function Head() {
  const [{ columns }] = useDataTableContext();

  const labelElements = columns.map(column => (
    <Label key={`label-${column.data}`} column={column} />
  ));

  return (
    <thead>
      <tr>{labelElements}</tr>
    </thead>
  );
}

export default Head;
