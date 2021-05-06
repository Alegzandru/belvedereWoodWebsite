import Layout from "../../components/layout"
import {ToateProdusele} from "../../components/catalogPage/toateProdusele"
import {LanguageContext} from "../../components/context"
import { useContext } from "react"


function Catalog() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title={"Каталог | Belvedere Wood Parquet"}
            description="Различные виды паркета, деревянные стены и лестницы - все это часть богатого ассортимента продукции Belvedere Wood Паркет."
            lang={1}
            langStr="/ru"
        >
            <ToateProdusele 
                lang={1}
                langStr="/ru"
            ></ToateProdusele>
        </Layout>
    )
}
  
export default Catalog