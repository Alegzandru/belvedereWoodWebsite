import Layout from "../components/layout"
import {ToateProiectele} from "../components/proiectePage/toateProiectele"
import {DescriereaProiectelor} from "../components/proiectePage/descriereaProiectelor"
import {Parteneri} from "../components/proiectePage/parteneri"
import {LanguageContext} from "../components/context"
import { useContext } from "react"

function Proiecte() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout title={"Proiectele noastre | Belvedere Wood Parquet"}>
            <ToateProiectele lang={language}></ToateProiectele>
            <DescriereaProiectelor lang={language}></DescriereaProiectelor>
            <Parteneri lang={language}></Parteneri>
        </Layout>
    )
}
  
export default Proiecte