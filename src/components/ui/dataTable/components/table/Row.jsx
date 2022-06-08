import useDataTableContext from "../../hooks/useDataTableContext";

function Row({ row }) {
  const [{ columns, sortBy }] = useDataTableContext();

  const rowElements = columns.map((column, index) => (
    <td key={`${index}-${column.data}`} className={column.data === sortBy ? "current-column" : ""}>
      {row[column.data]}
    </td>
  ));

  return <tr>{rowElements}</tr>;
}

export default Row;
