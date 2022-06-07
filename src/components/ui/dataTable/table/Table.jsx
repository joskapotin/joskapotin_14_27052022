import "./Table.css";

function Table({ columns, data }) {
  return (
    <table className="dataTable">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={`${index}-${column.data}`}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={`${index}-${row.firstName}`}>
            {columns.map((column, index) => (
              <td key={`${index}-${column.data}`}>{row[column.data]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
