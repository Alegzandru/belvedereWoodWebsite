import Layout from "../../components/layout"
import {Contacte} from "../../components/contactsPage/contacte"
import {LanguageContext} from "../../components/context"
import { useContext } from "react"

function ContactePage() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout
            noFooter = {true}
            title={"Контакты | Belvedere Wood Parquet"}
            description="Свяжитесь с Belvedere Wood Parquet по телефону +37369239184 или посетите наш выставочный зал на улице Узинелор 15/4, чтобы обсудить детали наших услуг / партнерских проектов."
            lang={1}
            langStr="/ru"
        >
            <Contacte lang={1}></Contacte>
        </Layout>
    )
}
  
export default ContactePage