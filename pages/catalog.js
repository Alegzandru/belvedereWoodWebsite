import Layout from "../components/layout"
import {ToateProdusele} from "../components/catalogPage/toateProdusele"
import {LanguageContext} from "../components/context"
import { useContext } from "react"


function Catalog() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title={"Toate produsele | Belvedere Wood Parchet"}
            description="Diferite tipuri de parchet, pereți și scări din lemn - toate acestea fac parte din asortimentul bogat de produse al companiei Belvedere Wood Parchet"
            lang={0}
            langStr=""
        >
            <ToateProdusele 
                lang={0}
                langStr=""
            ></ToateProdusele>
        </Layout>
    )
}
  
export default Catalog