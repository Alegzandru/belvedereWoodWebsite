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
            title={"О нас | Belvedere Wood Parquet"}
            description="История компании Belvedere Wood Паркет - основанная в 2011 году компания BWP имеет большой опыт в производстве, установке и реставрации паркета, а также деревянных стен и лестниц."
            lang={1}
            langStr="/ru"
        >
            <Istoria lang={1}></Istoria>
            <Realizari lang={1}></Realizari>
            <FAQ lang={1}></FAQ>
        </Layout>
    )
}
  
export default DespreNoi