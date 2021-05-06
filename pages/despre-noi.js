import Layout from "../components/layout"
import {Istoria} from "../components/aboutUsPage/istoria"
import {Realizari} from "../components/aboutUsPage/realizari"
import {FAQ} from "../components/aboutUsPage/faq"
import {LanguageContext} from "../components/context"
import { useContext } from "react"


function DespreNoi() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title={"Despre noi | Belvedere Wood Parquet"}
            description="Istoria companiei Belvedere Wood Parchet - fondată în 2011, BWP are o experiență vastă în producerea, instalarea și restaurarea parchetului , precum și a pereților și scărilor din lemn."
            lang={0}
            langStr=""
        >
            <Istoria lang={0}></Istoria>
            <Realizari lang={0}></Realizari>
            <FAQ lang={0}></FAQ>
        </Layout>
    )
}
  
export default DespreNoi