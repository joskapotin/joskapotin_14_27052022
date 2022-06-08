import useDataTableContext from "../../hooks/useDataTableContext";
import { setSortBy, setSortDirection } from "../../reducer/actionCreators";

function Label({ column }) {
  const [{ sortBy, sortDirection }, dispatch] = useDataTableContext();

  const handleClick = column => {
    if (column !== sortBy) dispatch(setSortBy(column));
    dispatch(setSortDirection());
  };

  const getLabelClassName = column => {
    if (column === sortBy) {
      if (sortDirection === "asc") return "sorting_asc";
      return "sorting_desc";
    }
    return "sorting";
  };

  return (
    <th className={getLabelClassName(column.data)} onClick={() => handleClick(column.data)}>
      {column.title}
    </th>
  );
}

export default Label;
