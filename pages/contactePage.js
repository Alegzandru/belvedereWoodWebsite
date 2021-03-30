import Layout from "../components/layout"
import {Contacte} from "../components/contactsPage/contacte"

function ContactePage() {
    return(
        <Layout
            noFooter = {true}
        >
            <Contacte></Contacte>
        </Layout>
    )
}
  
export default ContactePage