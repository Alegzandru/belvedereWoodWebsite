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
            description="Proiecte : Vedeți cum parchetul marca Belvedere Wood Parchet s-a înscris atât de organic și natural în interierul destinațiilor de importanță națională și a restaurantelor îndrăgite"
            lang={0}
            langStr=""
        >
            <ToateProiectele 
                lang={0}
                langStr=""
            ></ToateProiectele>
            <DescriereaProiectelor 
                lang={0}
                langStr=""
            ></DescriereaProiectelor>
            <Parteneri 
                lang={0}
                langStr=""
            ></Parteneri>
        </Layout>
    )
}
  
export default Proiecte