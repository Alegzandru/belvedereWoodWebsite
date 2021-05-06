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
            title="Проекты | Belvedere Wood Parquet"
            description="Проекты: узнайте, как паркетный пол Belvedere Wood Паркет стал настолько органичным и естественным в интерьерах объектов национального значения и любимых ресторанов."
            lang={1}
            langStr="/ru"
        >
            <ToateProiectele 
                lang={1}
                langStr="/ru"
            ></ToateProiectele>
            <DescriereaProiectelor 
                lang={1}
                langStr="/ru"
            ></DescriereaProiectelor>
            <Parteneri 
                lang={1}
                langStr="/ru"
            ></Parteneri>
        </Layout>
    )
}
  
export default Proiecte