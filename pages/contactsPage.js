import Layout from "../components/layout"
import {Contacte} from "../components/contactsPage/contacte"

function ContactePage() {
    return(
        <Layout
            noFooter = {true}
            title={"Contacte | Belvedere Wood Parquet"}
        >
            <Contacte></Contacte>
        </Layout>
    )
}
  
export default ContactePage