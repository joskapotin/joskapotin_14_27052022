import useDataTableContext from "../../hooks/useDataTableContext";
import { setPageSize } from "../../reducer/actionCreators";

function PageSize() {
  const [
    {
      pageSize,
      options: { pageSizeOptions },
    },
    dispatch,
  ] = useDataTableContext();

  const handleChange = e => {
    dispatch(setPageSize(parseInt(e.target.value)));
  };

  return (
    <div className="dataTable_length">
      <label>
        show{" "}
        <select onChange={handleChange} value={pageSize}>
          {pageSizeOptions.map((option, index) => (
            <option key={`${index}-${option}`} value={option}>
              {option}
            </option>
          ))}
        </select>{" "}
        entries
      </label>
    </div>
  );
}

export default PageSize;
