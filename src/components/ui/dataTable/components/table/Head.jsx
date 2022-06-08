import useDataTableContext from "../../hooks/useDataTableContext";
import Label from "./Label";

function Head() {
  const [{ columns }] = useDataTableContext();

  const labelElements = columns.map((column, index) => (
    <Label key={`${index}-${column.data}`} column={column} />
  ));

  return (
    <thead>
      <tr>{labelElements}</tr>
    </thead>
  );
}

export default Head;
