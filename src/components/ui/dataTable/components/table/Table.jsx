import { useEffect } from "react"
import useDataTableContext from "../../hooks/useDataTableContext"
import { setData, setLoading, setError } from "../../reducer/actionCreators"
import Head from "./Head"
import Body from "./Body"
import Loading from "./Loading"
import Error from "./Error"

function Table() {
  const [state, dispatch] = useDataTableContext()
  const { id, data, getData, currentPage, pageSize, loading, error } = state

  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  console.log("Table render")

  useEffect(() => {
    const abortController = new AbortController()

    const useGetData = async () => {
      try {
        dispatch(setLoading(true))
        const results = await getData(abortController)
        dispatch(setData(results))
      } catch (err) {
        dispatch(setError(err))
      } finally {
        dispatch(setLoading(false))
      }
    }

    useGetData()

    return () => {
      abortController.abort()
    }
  }, [dispatch, getData])

  return (
    <>
      <table className="dataTable" id={id}>
        <Head />
        <Body data={paginatedData} />
      </table>
      {error && <Error error={error} />}
      {loading && <Loading />}
    </>
  )
}

export default Table
