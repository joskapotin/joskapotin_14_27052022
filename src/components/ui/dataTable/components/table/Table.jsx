import { useDeferredValue } from "react";
import { useDataTableContext } from "../../context/DataTableContext";
import { setSortBy, setSortDirection } from "../../reducer/actionCreators";

const sortData = (data, sortBy, sortDirection) => {
  const sortedData = data.sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    }
    return a[sortBy] < b[sortBy] ? 1 : -1;
  });
  return sortedData;
};

const filterData = (data, filter) => {
  const filteredData = data.filter(row => {
    return Object.values(row).find(value => {
      return value.toLowerCase().includes(filter.toLowerCase());
    });
  });
  return filteredData;
};

function Table() {
  const [{ id, columns, data, currentPage, pageSize, sortBy, sortDirection, filter }, dispatch] =
    useDataTableContext();
  const deferredFilter = useDeferredValue(filter);

  const sortedData = sortData(data, sortBy, sortDirection);
  const filteredData = deferredFilter ? filterData(sortedData, deferredFilter) : sortedData;
  const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const displayedData = paginatedData;

  const labelClassName = column => {
    if (column === sortBy) {
      if (sortDirection === "asc") return "sorting_asc";
      return "sorting_desc";
    }
    return "sorting";
  };

  const handleSort = column => {
    if (column !== sortBy) dispatch(setSortBy(column));
    dispatch(setSortDirection());
  };

  const labels = columns.map((column, index) => (
    <th
      key={`${index}-${column.data}`}
      className={labelClassName(column.data)}
      onClick={() => handleSort(column.data)}
    >
      {column.title}
    </th>
  ));

  const rows = displayedData.map((row, index) => (
    <tr key={`${index}-${row.firstName}`}>
      {columns.map((column, index) => (
        <td
          key={`${index}-${column.data}`}
          className={column.data === sortBy ? "current-column" : ""}
        >
          {row[column.data]}
        </td>
      ))}
    </tr>
  ));

  return (
    <table className="dataTable" id={id}>
      <thead>
        <tr>{labels}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default Table;
