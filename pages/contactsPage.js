import Layout from "../components/layout"
import {Contacte} from "../components/contactsPage/contacte"
import {LanguageContext} from "../components/context"
import { useContext } from "react"

function ContactePage() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout
            noFooter = {true}
            title={"Contacte | Belvedere Wood Parquet"}
            description="Contactați Belvedere Wood Parquet pentru a discuta detalii cu privință la serviciile noastre/proiecte de parteneriat."
        >
            <Contacte lang={language}></Contacte>
        </Layout>
    )
}
  
export default ContactePage