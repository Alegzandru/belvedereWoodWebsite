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
            title={"Despre noi | Belvedere Wood Parchet"}
            description="Istoria companiei Belvedere Wood Parchet - fondata în 2011, BWP are o experienta vasta în producerea, instalarea și restaurarea parchetului , precum și a peretilor și scarilor din lemn."
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