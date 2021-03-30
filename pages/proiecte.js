import Layout from "../components/layout"
import {ToateProiectele} from "../components/proiectePage/toateProiectele"
import {DescriereaProiectelor} from "../components/proiectePage/descriereaProiectelor"
import {Parteneri} from "../components/proiectePage/parteneri"

function Proiecte() {
    return(
        <Layout>
            <ToateProiectele></ToateProiectele>
            <DescriereaProiectelor></DescriereaProiectelor>
            <Parteneri></Parteneri>
        </Layout>
    )
}
  
export default Proiecte