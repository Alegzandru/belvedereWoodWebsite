import Layout from "../components/layout"
import {ToateProdusele} from "../components/catalogPage/toateProdusele"
import {LanguageContext} from "../components/context"
import { useContext } from "react"


function Catalog() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title={"Toate produsele | Belvedere Wood Parquet"}
            description="Belvedere Wood Parquet valorifică unicitatea fiecărui arbore și îi alege doar pe cei care prin finisare produc cea mai frumoasă placă de parchet, treaptă sau decor pentru perete. Fiecare etapă este atent supravegheată pentru a putea oferi o gamă largă de produse, conform proiectului de design și preferințelor individuale ale clientului."
        >
            <ToateProdusele lang={language}></ToateProdusele>
        </Layout>
    )
}
  
export default Catalog