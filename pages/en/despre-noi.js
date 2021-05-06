import Layout from "../../components/layout"
import {Istoria} from "../../components/aboutUsPage/istoria"
import {Realizari} from "../../components/aboutUsPage/realizari"
import {FAQ} from "../../components/aboutUsPage/faq"
import {LanguageContext} from "../../components/context"
import { useContext } from "react"


function DespreNoi() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title={"About us | Belvedere Wood Parquet"}
            description="History of the company Belvedere Wood Parquet - founded in 2011, BWP has extensive experience in the production, installation and restoration of parquet, as well as wooden walls and stairs."
            lang={2}
            langStr="/en"
        >
            <Istoria lang={2}></Istoria>
            <Realizari lang={2}></Realizari>
            <FAQ lang={2}></FAQ>
        </Layout>
    )
}
  
export default DespreNoi