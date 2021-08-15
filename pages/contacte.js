import Layout from "../components/layout"
import {Contacte} from "../components/contactsPage/contacte"
import {LanguageContext} from "../components/context"
import { useContext } from "react"

function ContactePage() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout
            noFooter = {true}
            title={"Contacte | Belvedere Wood Parchet"}
            description="Contactati Belvedere Wood Parchet la numarul '+37369239184' sau vizitati showroom-ul nostru pe adresa 'strada Uzinelor 15/4' pentru a discuta detalii cu privința la serviciile noastre/proiecte de parteneriat."
            lang={0}
            langStr=""
        >
            <Contacte lang={0}></Contacte>
        </Layout>
    )
}
  
export default ContactePage