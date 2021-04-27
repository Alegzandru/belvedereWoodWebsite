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
            description="Forme, desene și structuri inedite ale lucrărilor, la crearea cărora se întâlnesc arta prelucrării manuale a lemnului cu tehnologiile performante. 
            Inspirată de tradiția centenară de producere a parchetului din lemn, Compania Belvedere Wood Parquet vine cu o experiență în crearea lucrărilor sale tocmai din Italia. De unde a adus nu doar rafinament și calitate înaltă, dar și abordare inovativă în procesul de prelucrare a plăcii de lemn.
            Cu noi aveți posibilitatea de a reproduce orice lucrare din domeniul podelelor din parchet, pereților și scărilor din lemn."
        >
            <Istoria lang={language}></Istoria>
            <Realizari lang={language}></Realizari>
            <FAQ lang={language}></FAQ>
        </Layout>
    )
}
  
export default DespreNoi