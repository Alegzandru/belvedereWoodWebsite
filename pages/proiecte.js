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
            title="Proiectele noastre | Belvedere Wood Parchet"
            description="Proiecte : Vedeti cum parchetul marca Belvedere Wood Parchet s-a inscris atat de organic si natural în interierul destinatiilor de importanta nationala si a restaurantelor indragite"
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