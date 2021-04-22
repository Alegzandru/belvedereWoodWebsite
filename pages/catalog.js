import Layout from "../components/layout"
import {ToateProdusele} from "../components/catalogPage/toateProdusele"
import {LanguageContext} from "../components/context"
import { useContext } from "react"


function Catalog() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout title={"Toate produsele | Belvedere Wood Parquet"}>
            <ToateProdusele lang={language}></ToateProdusele>
        </Layout>
    )
}
  
export default Catalog