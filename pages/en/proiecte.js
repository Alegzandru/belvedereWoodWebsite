import Layout from "../../components/layout"
import {ToateProiectele} from "../../components/proiectePage/toateProiectele"
import {DescriereaProiectelor} from "../../components/proiectePage/descriereaProiectelor"
import {Parteneri} from "../../components/proiectePage/parteneri"
import {LanguageContext} from "../../components/context"
import { useContext } from "react"

function Proiecte() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title="Our projects | Belvedere Wood Parquet"
            description="Projects: See how the Belvedere Wood Parquet flooring has become so organic and natural in the interior of destinations of national importance and beloved restaurants"
            lang={2}
            langStr="/en"
        >
            <ToateProiectele 
                lang={2}
                langStr="/en"
            ></ToateProiectele>
            <DescriereaProiectelor 
                lang={2}
                langStr="/en"
            ></DescriereaProiectelor>
            <Parteneri 
                lang={2}
                langStr="/en"
            ></Parteneri>
        </Layout>
    )
}
  
export default Proiecte