import Layout from "../components/layout"
import {Istoria} from "../components/aboutUsPage/istoria"
import {Realizari} from "../components/aboutUsPage/realizari"
import {FAQ} from "../components/aboutUsPage/faq"

function DespreNoi() {
    return(
        <Layout>
            <Istoria></Istoria>
            <Realizari></Realizari>
            <FAQ></FAQ>
        </Layout>
    )
}
  
export default DespreNoi