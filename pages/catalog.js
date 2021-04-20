import Layout from "../components/layout"
import {ToateProdusele} from "../components/catalogPage/toateProdusele"

function Catalog() {
    return(
        <Layout title={"Toate produsele | Belvedere Wood Parquet"}>
            <ToateProdusele></ToateProdusele>
        </Layout>
    )
}
  
export default Catalog