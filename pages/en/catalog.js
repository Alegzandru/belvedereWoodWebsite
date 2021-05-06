import Layout from "../../components/layout"
import {ToateProdusele} from "../../components/catalogPage/toateProdusele"
import {LanguageContext} from "../../components/context"
import { useContext } from "react"


function Catalog() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title={"All products | Belvedere Wood Parquet"}
            description="Different types of parquet, wooden walls and stairs - all of these are part of Belvedere Wood Parchet's rich product range"
            lang={2}
            langStr="/en"
        >
            <ToateProdusele 
                lang={2}
                langStr="/en"
            ></ToateProdusele>
        </Layout>
    )
}
  
export default Catalog