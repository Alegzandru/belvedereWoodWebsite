import Layout from "../components/layout"
import {Istoria} from "../components/aboutUsPage/istoria"
import {Realizari} from "../components/aboutUsPage/realizari"
import {FAQ} from "../components/aboutUsPage/faq"
import {LanguageContext} from "../components/context"
import { useContext } from "react"


function DespreNoi() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout title={"Despre noi | Belvedere Wood Parquet"}>
            <Istoria lang={language}></Istoria>
            <Realizari lang={language}></Realizari>
            <FAQ lang={language}></FAQ>
        </Layout>
    )
}
  
export default DespreNoi