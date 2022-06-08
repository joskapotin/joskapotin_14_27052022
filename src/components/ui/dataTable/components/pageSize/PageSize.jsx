import { useDataTableContext } from "../../context/DataTableContext";
import { setPageSize } from "../../reducer/actionCreators";

function PageSize() {
  const [, dispatch] = useDataTableContext();

  const handleChange = e => {
    dispatch(setPageSize(parseInt(e.target.value)));
  };

  return (
    <div className="dataTable_length">
      <label>
        show{" "}
        <select onChange={handleChange}>
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>{" "}
        entries
      </label>
    </div>
  );
}

export default PageSize;
