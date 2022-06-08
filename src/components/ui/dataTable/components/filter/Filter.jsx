import { useDataTableContext } from "../../context/DataTableContext";
import { setFilter } from "../../reducer/actionCreators";

function Filter() {
  const [{ filter }, dispatch] = useDataTableContext();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="dataTable_filter">
      <label>
        Search: <input type="search" placeholder="" onChange={handleChange} value={filter} />
      </label>
    </div>
  );
}

export default Filter;
