import Layout from "../../components/layout"
import {Contacte} from "../../components/contactsPage/contacte"
import {LanguageContext} from "../../components/context"
import { useContext } from "react"

function ContactePage() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout
            noFooter = {true}
            title={"Contacts | Belvedere Wood Parquet"}
            description="Contact Belvedere Wood Parquet at '+37369239184' or visit our showroom at 'Uzinelor street 15/4' to discuss details about our services / partnership projects."
            lang={2}
            langStr="/en"
        >
            <Contacte lang={2}></Contacte>
        </Layout>
    )
}
  
export default ContactePage