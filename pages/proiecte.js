import Layout from "../components/layout"
import {ToateProiectele} from "../components/proiectePage/toateProiectele"
import {DescriereaProiectelor} from "../components/proiectePage/descriereaProiectelor"
import {Parteneri} from "../components/proiectePage/parteneri"
import {LanguageContext} from "../components/context"
import { useContext } from "react"

function Proiecte() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title="Proiectele noastre | Belvedere Wood Parquet"
            description="Belvedere Wood Parquet valorifică unicitatea fiecărui arbore și îi alege doar pe cei care prin finisare produc cea mai frumoasă placă de parchet, treaptă pentru scări sau decor pentru perete. Vezi cum parchetul marca Belvedere Wood Parquet s-a înscris atât de organic și natural în interierul destinațiilor de importanță națională și a restaurantelor îndrăgite"
        >
            <ToateProiectele lang={language}></ToateProiectele>
            <DescriereaProiectelor lang={language}></DescriereaProiectelor>
            <Parteneri lang={language}></Parteneri>
        </Layout>
    )
}
  
export default Proiecte